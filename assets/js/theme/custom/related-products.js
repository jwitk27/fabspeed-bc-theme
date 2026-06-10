export default function () {
  const STORAGE_KEY = 'category-id';

  const toInt = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : NaN;
  };

  const escapeHtml = (s) =>
    String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');

  const formatMoney = (value, currency = 'USD') => {
    if (typeof value !== 'number') return '';
    try {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
    } catch {
      return `$${value}`;
    }
  };

  // ---------------------------
  // 1) CATEGORY PAGE: save category id
  // ---------------------------
  const isCategoryPage = document.body.classList.contains('page-type-category');
  if (isCategoryPage) {
    const $categoryId = $('#category-id');
    if ($categoryId.length) {
      const id = toInt($categoryId.data('category-id'));
      if (!Number.isNaN(id) && id > 0) {
        sessionStorage.setItem(STORAGE_KEY, String(id));
      }
    }
    return;
  }

  // ---------------------------
  // 2) PRODUCT PAGE: related-by-category
  // ---------------------------
  const $mount = $('#product-related');
  if (!$mount.length) return;

  const stored = sessionStorage.getItem(STORAGE_KEY);
  const categoryId = stored ? toInt(stored) : NaN;
  if (Number.isNaN(categoryId) || categoryId <= 0) return;

  const currentProductId = toInt($mount.data('product-id')) || null;
  const limit = toInt($mount.data('limit')) || 8;

  // Token from template (your working approach)
  const token = $mount.data('sf-token');
  const hasToken = typeof token === 'string' && token.length > 10;

  // ---------------------------
  // GraphQL: fetch category products
  // NOTE: request more fields so we can match the OG card better
  // ---------------------------
  const query = `
    query CategoryProducts($categoryId: Int!, $first: Int!) {
      site {
        category(entityId: $categoryId) {
          products(first: $first) {
            edges {
              node {
                entityId
                name
                path
                brand { name }
                defaultImage { url(width: 1280) altText }
                prices {
                  price { value currencyCode }
                }
              }
            }
          }
        }
      }
    }
  `;

  const fetchCategoryProducts = async (catId, first) => {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (hasToken) headers.Authorization = `Bearer ${token}`;

    const res = await fetch('/graphql', {
      method: 'POST',
      credentials: 'same-origin',
      headers,
      body: JSON.stringify({
        query,
        variables: { categoryId: Number(catId), first: Number(first) },
      }),
    });

    const json = await res.json();
    if (json?.errors?.length) throw new Error(json.errors.map((e) => e.message).join(', '));

    const edges = json?.data?.site?.category?.products?.edges || [];
    return edges.map((e) => e.node).filter(Boolean);
  };

  // ---------------------------
  // Render OG-ish markup
  // ---------------------------
  const cardHtml = (p) => {
    const imgUrl = p?.defaultImage?.url || '';
    const imgAlt = escapeHtml(p?.defaultImage?.altText || p?.name || '');
    const name = escapeHtml(p?.name || '');
    const brand = escapeHtml(p?.brand?.name || '');
    const priceVal = p?.prices?.price?.value;
    const cur = p?.prices?.price?.currencyCode || 'USD';
    const price = formatMoney(priceVal, cur);

    return `
      <div class="productCarousel-slide no-strike">
        <article class="card" data-product-id="${p.entityId}">
          <figure class="card-figure">
            <div class="themevale_badges"></div>

            <a href="${p.path}" class="product_img_link">
              <div class="card-img-container card-img-hover">
                ${
                  imgUrl
                    ? `<img src="${imgUrl}" alt="${imgAlt}" title="${imgAlt}" loading="lazy" class="card-image">`
                    : ``
                }
              </div>
            </a>

            <div class="card-figcaption">
              <a href="javascript:void(0)" class="card-button-quickview quickview" data-product-id="${p.entityId}">Quick view</a>
            </div>
          </figure>

          <div class="card-body">
            ${brand ? `<p class="card-brand" data-test-info-type="brandName">${brand}</p>` : ``}

            <h4 class="card-title" style="height:40px !important;">
              <a href="${p.path}">${name}</a>
            </h4>

            <div class="card-wrapper">
              <div style="display:block; width: 20px; background-color: rgb(224, 224, 224); height: 1px;"></div>

              <label class="card-compare" for="compare-${p.entityId}">
                <input type="checkbox" name="products[]" value="${p.entityId}" id="compare-${p.entityId}" data-compare-id="${p.entityId}">
                <span>Compare</span>
              </label>
            </div>

            <div class="card-wrapper">
              <div class="card-price" data-test-info-type="price">
                <div class="price-section price-section--withoutTax rrp-price--withoutTax" style="display:none;">
                  <span class="price price--rrp"></span>
                </div>
                <div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display:none;">
                  <span class="price price--non-sale"></span>
                </div>
                <div class="price-section price-section--withoutTax">
                  <span class="price price--withoutTax">${escapeHtml(price)}</span>
                </div>
              </div>

              <div class="card-wishlist">
                <a href="/wishlist.php?action=add&amp;product_id=${p.entityId}" class="card-button-wishlist" title="Add to Wish List">
                  <svg class="icon"><use xlink:href="#icon-heart"></use></svg>
                </a>
              </div>
            </div>

            <div class="card-figcaption">
              <a href="/cart.php?action=add&amp;product_id=${p.entityId}" data-event-type="product-click" class="button card-figcaption-button" data-product-id="${p.entityId}">
                Add to Cart
              </a>
            </div>
          </div>
        </article>
      </div>
    `;
  };

  const carouselHtml = (products) => {
    // Use same data-slick config as OG (stringified JSON)
    const slickConfig = {
      rows: 1,
      dots: true,
      arrows: false,
      mobileFirst: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
      prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
      responsive: [
        { breakpoint: 1025, settings: { slidesToShow: 4, slidesToScroll: 1, rows: 1, dots: true, arrows: true } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1, rows: 1, dots: true, arrows: false } },
        { breakpoint: 551, settings: { slidesToShow: 3, slidesToScroll: 1, rows: 1, dots: true, arrows: false } },
      ],
    };

    const dataSlick = escapeHtml(JSON.stringify(slickConfig));

    return `
      <div class="productCarousel" data-slick="${dataSlick}">
        ${products.map(cardHtml).join('')}
      </div>
    `;
  };

  const initSlickIfNeeded = ($el) => {
    // Theme already includes slick; this safely (re)inits
    if (!$.fn || !$.fn.slick) return;

    try {
      if ($el.hasClass('slick-initialized')) {
        $el.slick('unslick');
      }
    } catch (e) {}

    const raw = $el.attr('data-slick');
    let cfg = {};
    try {
      cfg = raw ? JSON.parse(raw) : {};
    } catch (e) {}

    $el.slick(cfg);
  };

  // ---------------------------
  // Run
  // ---------------------------
  (async () => {
    try {
      const pull = Math.max(limit + 10, limit);
      let products = await fetchCategoryProducts(categoryId, pull);

      if (currentProductId) products = products.filter((p) => p.entityId !== currentProductId);
      products = products.slice(0, limit);

      if (!products.length) return;

      // Render carousel wrapper + slides
      $mount.empty().html(carouselHtml(products));

      // Init slick on the new carousel
      const $carousel = $mount.find('.productCarousel');
      initSlickIfNeeded($carousel);
    } catch (e) {
      console.log(e);
    }
  })();
}

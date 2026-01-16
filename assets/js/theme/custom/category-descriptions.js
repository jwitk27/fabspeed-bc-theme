export default function () {
  if (window.matchMedia('(max-width: 499px)').matches) {
    if ($('.category-description').length) {
      const charLimit = 150;

      const $el = $('.category-description');
      const originalHtml = $el.html().trim();
      const fullText = $el.text().trim();

      if (fullText.length <= charLimit) return;

      let count = 0;
      let cutIndex = 0;

      for (let i = 0; i < originalHtml.length; i++) {
        if (originalHtml[i] === '<') {
          while (originalHtml[i] !== '>' && i < originalHtml.length) i++;
          continue;
        }
        count++;
        if (count === charLimit) {
          cutIndex = i + 1;
          break;
        }
      }

      const shortHtml = originalHtml.slice(0, cutIndex);
      const restHtml = originalHtml.slice(cutIndex);

      $el.data('short', shortHtml);
      $el.data('full', originalHtml);

      $el.html(
        shortHtml +
        '<span class="dots">...</span>' +
        '<button class="category-read-toggle read-toggle">Read more</button>'
      );

      $(document).on('click', '.category-read-toggle', function () {
        const expanded = $(this).text() === 'Read less';

        if (expanded) {
          $el.html(
            $el.data('short') +
            '<span class="dots">...</span>' +
            '<button class="category-read-toggle read-toggle">Read more</button>'
          );
        } else {
          $el.html(
            $el.data('full') +
            '<button class="category-read-toggle read-toggle">Read less</button>'
          );
        }
      });
    }
  }
}

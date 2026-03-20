export default function () {
  // Scope: only run on pages with product cards
  if (!$('.card').length) return;

  // Global flag to avoid double-running (matches your old behavior)
  if (window.hasRunEDDCalculation) return;
  window.hasRunEDDCalculation = true;

  const holidays = [
    new Date('2025-01-01'), // New Year's Day
    new Date('2024-12-25'), // Christmas Day
    // Add other holidays here
  ];

  const isHoliday = (date) =>
    holidays.some((h) =>
      date.getFullYear() === h.getFullYear() &&
      date.getMonth() === h.getMonth() &&
      date.getDate() === h.getDate()
    );

  const addBusinessDays = (startDate, days) => {
    const result = new Date(startDate);
    let count = 0;

    while (count < days) {
      result.setDate(result.getDate() + 1);
      const day = result.getDay();
      const isWeekend = day === 0 || day === 6;
      if (!isWeekend && !isHoliday(result)) count++;
    }
    return result;
  };

  const updateEDD = () => {
    // Fill .calculated-edd once
    $('.calculated-edd').each(function () {
      const $el = $(this);
      if ($el.data('updated') === true) return;

      const eddDays = 5;
      const estimated = addBusinessDays(new Date(), eddDays);
      const formatted = estimated.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      $el.text(formatted);
      $el.data('updated', true);
    });

    // Hide EDD if EDD2 exists (same parent logic as your script)
    $('.edd2-container').each(function () {
      const parent = this.parentElement;
      if (!parent) return;

      const edd = parent.querySelector('.calculated-edd');
      if (edd && edd.parentElement) {
        edd.parentElement.style.display = 'none';
      }
    });
  };

  // Initial run
  $(document).ready(() => {
    updateEDD();

    // Watch for product grid changes
    const productGrid = document.querySelector('.page-content');
    if (productGrid) {
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === 'childList') {
            updateEDD();
            break;
          }
        }
      });
      observer.observe(productGrid, { childList: true, subtree: true });
    }

    // "Show More"
    $(document).on('click', '#button-showmore-category', () => {
      setTimeout(updateEDD, 1000);
    });

    // Pagination
    $(document).on('click', '.pagination-link', () => {
      setTimeout(updateEDD, 1000);
    });
  });
}

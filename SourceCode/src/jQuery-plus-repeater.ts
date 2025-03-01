// src/jQuery-plus-repeater.ts
declare var jQuery: any;

(function ($) {
  $.fn.plusRepeater = function (options: { maxCopies?: number; onCopy?: () => void } = {}) {
    const settings = $.extend({
      maxCopies: 10,
      onCopy: () => {},
    }, options);

    return this.each(function (this: HTMLElement) {
      const $this = $(this);
      let copyCount = 1;

      $this.on('focus', ':last-child', function (this: HTMLElement) {
        if (copyCount >= settings.maxCopies) return;

        const $last = $(this).closest('.repeater-item').clone();
        $last.find('input, textarea, select').val('').attr('name', (name: string) => name + '_copy' + copyCount);
        $this.append($last);
        copyCount++;

        if (settings.onCopy) settings.onCopy();
      });
    });
  };
})(jQuery);
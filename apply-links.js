/**
 * Applies MEDPACK_LINKS from links.config.js to the page.
 * - <a data-dynamic="key">     → href (+ target _blank for http/https)
 * - <button data-dynamic="key"> → click navigates (buttons are not links)
 * - <form data-dynamic-form="key"> → action URL for waitlist/forms
 */
(function () {
  function apply() {
    var L = window.MEDPACK_LINKS || {};

    document.querySelectorAll('[data-dynamic]').forEach(function (el) {
      var key = el.getAttribute('data-dynamic');
      var url = L[key];
      if (!url || url === '#') return;

      var tag = el.tagName.toLowerCase();
      if (tag === 'a') {
        el.setAttribute('href', url);
        if (/^https?:\/\//i.test(url)) {
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        }
      } else if (tag === 'button') {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          if (/^mailto:/i.test(url)) {
            window.location.href = url;
          } else {
            window.open(url, '_blank', 'noopener');
          }
        });
      }
    });

    document.querySelectorAll('[data-dynamic-form]').forEach(function (form) {
      var key = form.getAttribute('data-dynamic-form');
      var url = L[key];
      if (url && url !== '#') {
        form.setAttribute('action', url);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();

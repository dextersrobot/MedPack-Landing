/**
 * Applies MEDPACK_LINKS from links.config.js to the page.
 * - <a data-dynamic="key">     → href (+ target _blank for http/https)
 * - <button data-dynamic="key"> → click navigates (buttons are not links)
 * - <form data-dynamic-form="key"> → action URL, or waitlist + web3formsAccessKey → api.web3forms.com
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
      if (key === 'waitlist') {
        var w3k = L.web3formsAccessKey;
        if (w3k && String(w3k).trim()) {
          form.setAttribute('action', 'https://api.web3forms.com/submit');
          form.setAttribute('method', 'POST');
          var existing = form.querySelector('input[name="access_key"]');
          if (existing) {
            existing.value = w3k;
          } else {
            var acc = document.createElement('input');
            acc.type = 'hidden';
            acc.name = 'access_key';
            acc.value = w3k;
            form.insertBefore(acc, form.firstChild);
          }
          return;
        }
      }
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

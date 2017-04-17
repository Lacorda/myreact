(function (win) {
  var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;

  var jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    init: function (selector, context) {
      if (!selector) return this;

      // HANDLE: $(DOMElement)
      if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      }
    },
    html: function (text) {
      this.innerHTML = text;
      return this;
    }
  };
  jQuery.fn.init.prototype = jQuery.fn;


  win.jQuery = win.$ = jQuery;

})(window);

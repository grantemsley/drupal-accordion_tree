(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.createAccordion = {
  attach: function(context, settings) {
  alert("hello");
  $("ul", context).accordion({
      container: true,
      el: ".h", 
      head: "h3, h4", 
      next: "div", 
      initShow : ""
  });
  }
};
})(jQuery, Drupal, this, this.document);


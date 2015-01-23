(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.createAccordion = {
  attach: function(context, settings) {
  $("#accordion").accordion({
      container: false,
      el: ".h", 
      head: "h3, h4", 
      next: "div", 
      initShow : "",
      obj: 'ul',
  });
  }
};
})(jQuery, Drupal, this, this.document);


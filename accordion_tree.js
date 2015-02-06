(function($) {
  Drupal.tableDrag.prototype.row.prototype.findSiblings = function(rowSettings) {
    var siblings = []
      , directions = [ 'prev', 'next' ];
    for (var d = 0; d < directions.length; ++d) {
      var checkRow = $(this.element)[directions[d]]();
      while (checkRow.length) {
        if ($('.' + rowSettings.target, checkRow)) {
          siblings.push(checkRow[0]);
        }
        else {
          break;
        }
        checkRow = $(checkRow)[directions[d]]();
      }
      if ('prev' == directions[d]) {
        siblings.reverse();
        siblings.push(this.element);
      }
    }
    return siblings;
  };

  Drupal.behaviors.accordion_tree_hide_body = {
    
    attach: function(context, setting) {
      $('.accordionitem-showhide', context).once('accordion-showhide', function() {
        // Get the ID of this item, and attach the click handler to the ID
        // If you use the CLASS instead, handler gets attached to each item once for each item - so the handler triggers multiple times
        var id = "#" + this.id;
        $(id).click(function(){
          // Prevent the normal link behavior from firing
          event.preventDefault();
          // Hide the div directly after this item
          $(this).next('div').toggle();
          // Change the text to match the state of the div
          var txt = $(this).next('div').is(':visible') ? 'Hide body' : 'Show body';
          $(this).text(txt);
        });
      });
    }
  };
})(jQuery);

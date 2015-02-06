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
      $('.accordionitem-showhide').once('accordion-showhide', function() {
        $(".accordionitem-showhide").click(function(){
          event.preventDefault();
          //alert("doing stuff");
          $(this).next('div').toggle();
          var txt = $(this).next('div').is(':visible') ? 'Hide body' : 'Show body';
          $(this).text(txt);
        });
      });
    }
  };
})(jQuery);

(function() {
    let $element = $('#dropdown');

    $element.select2({
        width: '20%',
        minimumResultsForSearch: Infinity,
        templateResult: function (item) {
          console.log(item);
          if (item.disabled) {
            return 'no item title available';
          }
          return $(                
            `<div class='select-item item-text'>
            <img class='item-thumb' src='./thumbs/image1.png'>
              <span>${item.text}</span>
              </div>
          `);
        },
        templateSelection: function(item) {
            var $item = $(
                `<div>
                  <span>[img here]</span>&nbsp;
                  <span>${item.text}</span>
                </div>`
              );

            return $item;
        }
      });
})()
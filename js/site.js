(function($){
  $('.privacy-doc').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    iframe : {
        preload: false
    },
    afterLoad: function(current, previous){
      $('.privacy-checkbox').prop({
        'disabled': false,
        'checked': true
      })
    }
  });
  $('.all-clear-doc').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    iframe : {
        preload: false
    },
    afterLoad: function(current, previous){
      $('.all-clear-checkbox').prop({
        'disabled': false,
        'checked': true
      })
    }
  })
;}(jQuery));

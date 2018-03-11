$('.port-item').click(function () {
    $('.collapse').collapse('hide');
  });

  $(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
      selectedClass = $(this).attr("data-rel");
      $("#portfolio").fadeTo(100, 0.1);
      $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
      setTimeout(function () {
        $("." + selectedClass).fadeIn().addClass('scale-anm');
        $("#portfolio").fadeTo(300, 1);
      }, 300);

    });
  });

  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  jQuery('.skillbar').each(function () {
    jQuery(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 6000);
  });

  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  $('.flip-container').click(function () {
    $('.flip-container').toggleClass('flip');
  });

  
  var $element = $('.each-event, .title');
  var $window = $(window);
  $window.on('scroll resize', check_for_fade);
  $window.trigger('scroll');
  function check_for_fade() {
    var window_height = $window.height();

    $.each($element, function (event) {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_offset = $element.offset().top;
      space = window_height - (element_height + element_offset - $(window).scrollTop());
      if (space < 60) {
        $element.addClass("non-focus");
      } else {
        $element.removeClass("non-focus");
      }

    });
  };

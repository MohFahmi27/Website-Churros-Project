$(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
  });

$(".slider-nav-product").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  dots: true,
  arrows: true,
  autoplay: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: false
      }
    },
    {
      breakpoint: 901,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false        
      }
    },
    {
      breakpoint: 710,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false
      }
    },
    {
      breakpoint: 390,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

$(".slider-product").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});  
/*-----------------navbar-menu--------------*/
    
  /* <script type="text/javascript">*/
    /// some script
	
	// jquery ready start
	$(document).ready(function() {
		// jQuery code
	
		$(document).on('click', '.dropdown-menu', function (e) {
		  e.stopPropagation();
		});
	
		// make it as accordion for smaller screens
		if ($(window).width() < 992) {
			  $('.dropdown-menu a').click(function(e){
				  e.preventDefault();
				if($(this).next('.submenu').length){
					$(this).next('.submenu').toggle();
				}
				$('.dropdown').on('hide.bs.dropdown', function () {
				   $(this).find('.submenu').hide();
				})
			  });
    }
    
		
	}); // jquery end


  
/*</script>*/
/*-----------------navbar-menu--------------------*/










$(document).ready(function () {
    /*------------------
    Dishes Slider
     --------------------*/
    $(".dishes_slider").owlCarousel({
        margin: 10,
        loop: true,
//    autoWidth: true,
        items: 3,
        dots: false,
        nav: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],

        smartSpeed: 1000,
        autoHeight: true,
        autoplay: false,
        responsive: {
            0: {

                items: 1,
            },
            576: {

                items: 2,
            },
            992: {

                items: 3,
            },
            1200: {

                items: 3,
            }
        }
    });

    
    $(".offer_carousel").owlCarousel({
        margin: 10,
        loop: true,
//    autoWidth: true,
        items: 4,
        dots: false,
        nav: false,
        smartSpeed: 1000,
        autoHeight: true,
        autoplay: false,
        responsive: {
            0: {

                items: 2,
            },
            576: {

                items: 2,
            },
            992: {

                items: 3,
            },
            1200: {

                items: 4,
            }
        }
    });
});



 


/*----------------***********collapsible home page> about section*********----------------*/

var coll = $(".bizgabout__collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
};



/*jquery(function($){
  var $navbar = $('.bizghead');
$(window).scroll(function(event){
  var $current = $(this.scrolltop());
  if($current > 0 ){
  $navbar.css('display','none !important');
  } else {
    $navbar.css('display','block');
  }
});
});*/

/*
$(function() {
  $(window).scroll(function() {
      // console.log('scrolling ', $(window).scrollTop(), $(document).height());
      if($(window).scrollTop() >= 200 && $(window).scrollTop() <= ($(document).height() - 500)) {
          $('.bizghead').hide();
          $('.bizghead').removeClass('d-none d-lg-block d-xl-block');
      } else {
          $('.bizghead').show();
          $('.bizghead').addClass('d-none d-lg-block d-xl-block');
      }
  });
});

*/




var swiperkeyHighlights = new Swiper(".keyHighlights-slider", {
  watchSlidesProgress: true,
  loop:true,
  //allowTouchMove:false,
  //slideToClickedSlide:true,
  autoplay: {
		enabled: true,
		delay: 3000,
		disableOnInteraction: true,
	},
	centeredSlides: false,
	navigation: false,
	spaceBetween: 15,
	speed: 1800,
  breakpoints: {
    0: {
        spaceBetween: 18,
        slidesPerView: 1.2,
    },
    767: {
        spaceBetween: 18,
        slidesPerView: 1.8,
    },
    1024: {
        spaceBetween: 24,
        slidesPerView: 2.5,
    },
    1280: {
        spaceBetween: 24,
        slidesPerView: 4.1,
        //loop:false,
    }
  },
});
document.addEventListener('mouseenter', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.keyHighlights-slider')) {
		el.swiper.autoplay.stop();
		el.classList.add('swiper-paused');
	}
}, true);

document.addEventListener('mouseleave', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.keyHighlights-slider')) {
		el.swiper.autoplay.start();
		el.classList.remove('swiper-paused');
	}
}, true);

$(document).ready(function () {
  //---- select2 single----
  //custom-select
  $('.custom-select').each(function() {
		var dropdownParents = $(this).parents('.select2Part')
		$(this).select2({
			//dropdownParent: dropdownParents,
			minimumResultsForSearch: -1
		})
  });
	$('.customSelect').each(function() {
		var dropdownParents = $(this).parents('.select2Part')
		$(this).select2({
			dropdownParent: dropdownParents,
			minimumResultsForSearch: -1
		}).on("select2:open", function (e) { 
			$(this).parents('.floating-group').addClass('focused');
		}).on("select2:close", function (e) {
			if($(this).find(':selected').val() === ''){
				$(this).parents('.floating-group').removeClass('focused');
			}
		});
	});

  $('.floating-control').on('change', function (e) {
    if($(this).is('select')){
      if($(this).val() === $("option:first", $(this)).val()) {
        $(this).parents('.floating-group').removeClass('focused').addClass('showPlaceholder');
      }
      else{
        $(this).parents('.floating-group').addClass('focused').removeClass('showPlaceholder');
      }
    }
  })
  
  $(document).on('click','.btn-show-more.show', function(){
      $(this).removeClass("show").addClass('less');
      $(this).text('Show less').prev('.hidden-content').addClass('show-content');
  });

  $(document).on('click','.btn-show-more.less', function(){
    $(this).removeClass("less").addClass('show');
    $(this).text('Show more').prev('.hidden-content').removeClass('show-content');
  });

  $(document).on('click','.faqs .accordionWrap h5', function(){
    $(this).toggleClass('active').next('.accordioncontent').slideToggle();
  });

  $(document).on('click','.faqs .btn-view-all', function(){
    $(this).prev('.hidden-faqs').slideDown();
    $(this).fadeOut();
  });
  $(document).on('click','.btn-show-full-range', function(){
    //#variants-pricing inner linking
    $('html, body').animate({
      scrollTop: $('#variants-pricing').offset().top - $('.stickyNav').outerHeight()
    }, 500);
    
    return false;
  });
  
  $(document).on('click','.btn-video', function(){
    var videosrc = $(this).find('img').attr('data-rel');
    $('.videoPopup source').attr('src', videosrc)
    $('.popup-overlay, .videoPopup').fadeIn();
    $("#popupvideo").get(0).load();
    $("#popupvideo").get(0).play();
  });
  
  $("body").keydown(function(event) {
    if(event.which == 27) {
      $('.popup-overlay, .videoPopup, .thankyouPopup').fadeOut();
    }
  });
  $(document).on('click','.popup-overlay', function(){
    $('.popup-overlay, .videoPopup, .thankyouPopup').fadeOut();
  });

});
  
  
AOS.init({
  duration: 500,
})
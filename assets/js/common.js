
AOS.init({
    duration: 500,
})
var swiper = new Swiper(".heroBanner-swiper", {
  slidesPerView:1,
  watchSlidesProgress: true,
  pagination: {
		el: '.swiper-pagination',
		type: "progressbar",
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper(".heroVideoBanner-swiper", {
  slidesPerView:1,
  watchSlidesProgress: true,
  pagination: {
		el: '.swiper-pagination',
		type: "progressbar",
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper(".highlights-slider", {
  slidesPerView:3.5,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  pagination: {
		el: '.swiper-pagination',
		type: "progressbar",
	},
  navigation: false,
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
        slidesPerView: 3.5,
    },
},
});

document.addEventListener('mouseenter', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.highlights-slider')) {
		el.swiper.autoplay.stop();
		el.classList.add('swiper-paused');
	}
}, true);

document.addEventListener('mouseleave', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.highlights-slider')) {
		el.swiper.autoplay.start();
		el.classList.remove('swiper-paused');
	}
}, true);

var swiper = new Swiper(".unmissablePresence-slider", {
  slidesPerView:3.5,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  pagination: {
		el: '.swiper-pagination',
		type: "progressbar",
	},
  navigation: false,
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
        slidesPerView: 3.5,
    },
},
});

document.addEventListener('mouseenter', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.unmissablePresence-slider')) {
		el.swiper.autoplay.stop();
		el.classList.add('swiper-paused');
	}
}, true);

document.addEventListener('mouseleave', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.unmissablePresence-slider')) {
		el.swiper.autoplay.start();
		el.classList.remove('swiper-paused');
	}
}, true);

var swiper = new Swiper(".bannerSwiper", {
  slidesPerView:1,
  watchSlidesProgress: true,
  pagination: {
		el: '.swiper-pagination',
		type: "progressbar",
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// document.addEventListener('mouseenter', event => {
// 	const el = event.target;
// 	if (el && el.matches && el.matches('.bannerSwiper')) {
// 		el.swiper.autoplay.stop();
// 		el.classList.add('swiper-paused');
// 	}
// }, true);

// document.addEventListener('mouseleave', event => {
// 	const el = event.target;
// 	if (el && el.matches && el.matches('.bannerSwiper')) {
// 		el.swiper.autoplay.start();
// 		el.classList.remove('swiper-paused');
// 	}
// }, true);

$(document).ready(function () {
  //---- select2 single----
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
        $(this).parents('.floating-group').removeClass('focused');
      }
      else{
        $(this).parents('.floating-group').addClass('focused');
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

  $(document).on('click','.videoPopup .btn-close', function(){
    $('.popup-overlay, .videoPopup').fadeOut();
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

  $(".getInTouchForm .btn-submit").click(function(event) {
    event.preventDefault();

    // Validate each field
    var isValid = true;
    var firstname = $("#firstname").val();
    if (firstname === "") {
      $("#firstname").parents('.field-wrap').find('.errorMsg').fadeIn();
      isValid = false;
    }
    else if (firstname != "") {
      $("#firstname").parents('.field-wrap').find('.errorMsg').hide();
    }
    var lastname = $("#lastname").val();
    if (lastname === "") {
      $("#lastname").parents('.field-wrap').find('.errorMsg').fadeIn();
      isValid = false;
    }
    else if (lastname != "") {
      $("#lastname").parents('.field-wrap').find('.errorMsg').hide();
    }

    // Email validation
    var email = $("#email").val();
    if (email === "") {
      $("#email").parents('.field-wrap').find('.errorMsg').text("Please enter Email").fadeIn();
      isValid = false;
    } else if (!isValidEmail(email)) {
      $("#email").parents('.field-wrap').find('.errorMsg').text("Invalid Email format").fadeIn();
      isValid = false;
    }
    else if (email != "" && isValidEmail(email)){
      $("#email").parents('.field-wrap').find('.errorMsg').hide();
    }

    // Contact Number validation
    var contactnumber = $("#contactnumber").val();
    if (contactnumber === "") {
      $("#contactnumber").parents('.field-wrap').find('.errorMsg').fadeIn();
      isValid = false;
    }
    else if (contactnumber != "") {
      $("#contactnumber").parents('.field-wrap').find('.errorMsg').hide();
    }

    // OTP validation
    // var otp = $("#otp").val();
    // if (otp === "") {
    //   $("#otp").parents('.field-wrap').find('.errorMsg').fadeIn();
    //   isValid = false;
    // }
    // else if (otp != "") {
    //   $("#otp").next('.errorMsg').hide();
    // }
    // If all fields are valid, you can proceed with form submission
    if (isValid) {
      //$(this).parents('.contentFormwrap').hide().next('.successWrap').fadeIn()
      // Add your form submission logic here
      $('.getInTouchForm .errorMsg').hide();
      //alert("Form submitted successfully!");
      $('.popup-overlay, .thankyouPopup').fadeIn();
      //$("#fullname, #email, #contactnumber, #otp").val("");
      $("#fullname, #email, #contactnumber").val("");
    }
  });

  $(document).on('click','.thankyouPopup .btn-close, .thankyouPopup .btn-done', function(){
    $('.popup-overlay, .thankyouPopup').fadeOut();
  });

  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  } 
});
  
  
  
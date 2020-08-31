'use strict';

(function () {
  function init() {
    var router = new Router([
      new Route('home', 'home.html', true),
      new Route('courses', 'courses.html'),
      new Route('instructor', 'instructor.html'),
      new Route('about', 'about.html'),
      new Route('contact', 'contact.html'),
      new Route('blog', 'blog.html'),
      new Route('blog-details-1', 'blog-details-1.html'),
      new Route('single-course-placement-training','single-course-placement-training.html'),
      new Route('single-course-test-series','single-course-test-series.html'),
      new Route('elitmus','elitmus.html'),
      new Route('termsandconditions','terms.html'),
      new Route('privacy','privacy.html'),
      new Route('faq','faq.html'),
      new Route('blog-1','blog-1.html'),
      new Route('blog-2','blog-2.html'),
      new Route('blog-4','blog-4.html'),
      new Route('blog-5','blog-5.html'),
      new Route('blog-7','blog-7.html'),
      new Route('blog-8','blog-8.html'),
      new Route('test','test.html')
    ]);
  }

  function setMenuActiveClass() {
    $('.navigation nav li').on('click', function () {
      $('.navigation nav').find('li a.active').removeClass('active');
      $(this).find('a:first').addClass('active');
    });
  }

  function navigateToHome() {
    $('.logo').on('click', function () {
      $('.navigation nav').find('li a.active').removeClass('active');
      $('#homeMenu').addClass('active');
    });
  }
  init();
  setMenuActiveClass();
  navigateToHome();
}());

// vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}


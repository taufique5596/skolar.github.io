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
      new Route('test','test.html'),
      new Route('elitmus-test','elitmus-test.html'),
      new Route('dsalgo','dsalgo.html'),
      new Route('blog-9','blog-9.html'),
      new Route('PPPL2','PPPL2.HTML')
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



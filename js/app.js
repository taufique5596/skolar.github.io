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
      new Route('blog-8','blog-8.html')
    ]);
  }

  function setMenuActiveClass() {
    $('#topheader .classynav li').on('click', function () {
      $('#topheader .classynav').find('li a.active').removeClass('active');
      $(this).find('a:first').addClass('active')
    });
  }
  init();
  setMenuActiveClass();
}());

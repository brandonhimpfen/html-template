document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('nav');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  // Lazy Load Images
  const lazyImages = document.querySelectorAll('img.lazy');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // Scroll to Top Button
  const scrollToTopButton = document.querySelector('#scrollToTopButton');
  if (scrollToTopButton) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    });
    scrollToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Form Validation
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Placeholder for Future JavaScript
  console.log('Main JavaScript loaded successfully.');
});

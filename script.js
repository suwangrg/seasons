
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.overlay');

  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // Set active nav link
  const navLinks = document.querySelectorAll('.nav-links');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  const animatedElements = document.querySelectorAll('.service-card, .team-member, .timeline-item, .testimonial');
  animatedElements.forEach(el => observer.observe(el));

  // Testimonial Carousel
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentIndex = 0;
  let interval;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) {
        testimonial.classList.add('active');
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function startCarousel() {
    interval = setInterval(nextTestimonial, 5000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  if (testimonials.length > 0) {
    startCarousel();

    nextButton.addEventListener('click', () => {
      stopCarousel();
      nextTestimonial();
      startCarousel();
    });

    prevButton.addEventListener('click', () => {
      stopCarousel();
      prevTestimonial();
      startCarousel();
    });
  }
});

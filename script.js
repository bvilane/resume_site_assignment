function validateEmail() {
    const email = document.getElementById('email-input').value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  }

  function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('responsive');
  }
  let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName('slide');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

showSlides(slideIndex);
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('btn-back-to-top').style.display = 'block';
  } else {
    document.getElementById('btn-back-to-top').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

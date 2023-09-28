const navbar = document.querySelector('.navbar');

const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burger');


button.addEventListener('click', function() {

    mobileNavbar.classList.toggle('active');

});


window.addEventListener('scroll', function () {
    if (this.window.location.href > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
  });
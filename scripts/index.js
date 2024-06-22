const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burger");

button.addEventListener("click", function () {
  mobileNavbar.classList.toggle("active");
});











const menuHamburguer = document.querySelector('.menu-hamburguer');

const links = document.querySelectorAll('.navbar-links li a');

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let header = document.getElementById('header');

function createSwiper(container, pagination, nextButton, prevButton) {
  return new Swiper(container, {
    slidesPerView: handleWidth(),
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
}

function handleWidth() {
  let getWidth = window.innerWidth || document.documentElement.clientWidth;
  let slideShow = 3;

  if (getWidth < 1001) {
    slideShow = 2;
  }

  if (getWidth < 700) {
    slideShow = 1;
  }

  return slideShow
}


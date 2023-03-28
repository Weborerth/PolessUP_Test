var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
    
  });


var modalBtn = document.getElementById("modal-btn");
var modal = document.getElementById("modal");
var closeModalBtn = document.getElementById("close-modal");

modalBtn.onclick = function() {
  modal.style.display = "block";
}

closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('click', function(event) {
  if (!event.target.closest('.hamburger-menu') && event.target.tagName !== 'A') {
    var checkbox = document.getElementById('menu__toggle');
    checkbox.checked = false;
  }
});

const menuItems = document.querySelectorAll('.menu__item');
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    const menuToggle = document.getElementById('menu__toggle');
    menuToggle.checked = false;
  });
});

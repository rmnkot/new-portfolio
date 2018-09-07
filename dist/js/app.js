/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-82px";
  }
  prevScrollpos = currentScrollPos;
}

// Smooth scroll on link triggering
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (event) {
//     event = event || window.event; // cross browser solution
//     event.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   });
// });

// Open hamburger menu
function openBurger() {
  const menu = document.querySelector("#drop-down").children;
  let i = 0;
  const myVal = setInterval(slide1, 80);
  function slide1() {
    if (i < menu.length - 1) {
      menu[i].classList.toggle("active-slide-down");
      i++;
    } else {
      menu[menu.length - 1].classList.toggle("active-btn-down");
      clearInterval(myVal);
    }
  }

}





// Open modal window
function openModal(bg, id) {
  // opening a specific project card
  if (id != undefined) {
    const card = document.querySelector(id);
    // display first image
    card.firstElementChild.children[0].id = "active-img";
    card.firstElementChild.children[1].id = "";
    card.firstElementChild.children[2].id = "";
    card.style.opacity = "1";
    card.style.display = "flex";
    card.classList.add("active-card");
  }
  const modalId = document.querySelector(bg);
  modalId.style.opacity = "1";
  modalId.style.display = "block";
  modalId.classList.add("active-modal");
  setTimeout(scaleUp, 100);
  function scaleUp() {
    modalId.style.transform = "scale(1)";
  }
}

// Close modal window
function closeModal() {
  // closing specific project card 
  if (document.querySelector(".active-card") != undefined) {
    const card = document.querySelector(".active-card");
    card.style.opacity = "0"
    setTimeout(delay, 400);
    function delay() {
      card.style.display = "none";
      card.classList.remove("active-card");
      card.firstElementChild.children[0].id = "";
      card.firstElementChild.children[1].id = "";
      card.firstElementChild.children[2].id = "";

    }
  }
  const modalId = document.querySelector(".active-modal");
  modalId.style.opacity = "0";
  setTimeout(scaleDown, 400);
  function scaleDown() {
    modalId.style.transform = "scale(0)";
    modalId.style.display = "none";
    modalId.classList.remove("active-modal");
  }
}

// Set event listener on the contact window
document.querySelector("#contact").addEventListener("click", closeModalBg);

// Set event listener on the portfolio window
document.querySelector("#portfolio").addEventListener("click", closeModalBg);

// Set event listener on the resume window
document.querySelector("#resume").addEventListener("click", closeModalBg);

// Close modal window when the user clicks anywhere on the background, outside of the modal box
function closeModalBg(event) {
  const modal = document.querySelector(".active-modal");
  if (event.target == modal) {
    closeModal();
  }
}

// moving to the next project 
function next() {
  const active = document.querySelector(".active-card");
  const list = document.getElementsByClassName("portfolio-content");
  // define what particular object is opened
  for (let i = 0; i < list.length; i++) {
    if (list[i] == active) {
      if (i == (list.length - 1)) {
        // closing actual object
        active.style.display = "none";
        active.style.opacity = "0";
        // hide actual image
        active.firstElementChild.children[0].id = "";
        active.firstElementChild.children[1].id = "";
        active.firstElementChild.children[2].id = "";

        active.classList.remove("active-card");
        // opening next object
        list[0].style.display = "flex";
        setTimeout(delay, 100);
        function delay() {
          // display next image
          list[0].firstElementChild.children[0].id = "active-img";
          list[0].firstElementChild.children[1].id = "";
          list[0].firstElementChild.children[2].id = "";

          list[0].style.opacity = "1";
          list[0].classList.add("active-card");
        }
      } else {
        // closing actual object
        active.style.display = "none";
        active.style.opacity = "0";
        // hide actual image
        active.firstElementChild.children[0].id = "";
        active.firstElementChild.children[1].id = "";
        active.firstElementChild.children[2].id = "";

        active.classList.remove("active-card");
        // opening next object
        list[i + 1].style.display = "flex";
        setTimeout(delay1, 100);
        function delay1() {
          // display next image         
          list[i + 1].firstElementChild.children[0].id = "active-img";
          list[i + 1].firstElementChild.children[1].id = "";
          list[i + 1].firstElementChild.children[2].id = "";

          list[i + 1].style.opacity = "1";
          list[i + 1].classList.add("active-card");
        }
      }
    }
  }
}

// moving to the previous project
function prev() {
  const active = document.querySelector(".active-card");
  const list = document.getElementsByClassName("portfolio-content");
  // define what particular object is opened
  for (let i = 0; i < list.length; i++) {
    if (list[i] == active) {
      if (i == 0) {
        // closing actual object
        active.style.display = "none";
        active.style.opacity = "0";
        // hide actual images
        active.firstElementChild.children[0].id = "";
        active.firstElementChild.children[1].id = "";
        active.firstElementChild.children[2].id = "";

        active.classList.remove("active-card");
        // opening next object
        list[(list.length - 1)].style.display = "flex";
        setTimeout(delay, 100);
        function delay() {
          // display next images
          list[(list.length - 1)].firstElementChild.children[0].id = "active-img";
          list[(list.length - 1)].firstElementChild.children[1].id = "";
          list[(list.length - 1)].firstElementChild.children[2].id = "";

          list[(list.length - 1)].style.opacity = "1";
          list[(list.length - 1)].classList.add("active-card");
        }
      } else {
        // closing actual object
        active.style.display = "none";
        active.style.opacity = "0";
        // hide actual images
        active.firstElementChild.children[0].id = "";
        active.firstElementChild.children[1].id = "";
        active.firstElementChild.children[2].id = "";

        active.classList.remove("active-card");
        // opening next object
        list[i - 1].style.display = "flex";
        setTimeout(delay1, 100);
        function delay1() {
          // display next images          
          list[i - 1].firstElementChild.children[0].id = "active-img";
          list[i - 1].firstElementChild.children[1].id = "";
          list[i - 1].firstElementChild.children[2].id = "";

          list[i - 1].style.opacity = "1";
          list[i - 1].classList.add("active-card");
        }
      }
    }
  }
}

function fw() {
  const list = document.querySelector(".active-card").firstElementChild.children;
  const element = document.querySelector("#active-img");

  for (let i = 0; i < list.length; i++) {
    if (list[i] == element) {
      if (i == (list.length - 1)) {
        element.id = "";
        list[0].id = "active-img";
      } else {
        element.id = "";
        list[i + 1].id = "active-img";
      }
    }
  }
}

function bw() {
  const list = document.querySelector(".active-card").firstElementChild.children;
  const element = document.querySelector("#active-img");

  for (let i = 0; i < list.length; i++) {
    if (list[i] == element) {
      if (i == 0) {
        element.id = "";
        list[(list.length - 1)].id = "active-img";
      } else {
        element.id = "";
        list[i - 1].id = "active-img";
      }
    }
  }
}
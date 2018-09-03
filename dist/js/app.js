// Open modal window
function openModal(bg, id) {
  // opening a specific project card
  if (id != undefined) {
    const card = document.querySelector(id);
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
document.querySelector("#contact").addEventListener("click", closeModalBg)

// Set event listener on the portfolio window
document.querySelector("#portfolio").addEventListener("click", closeModalBg)


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

  for (let i = 0; i < list.length; i++) {
    if (list[i] == active) {
      if (i == (list.length - 1)) {
        // closing actual object
        active.style.display = "none";
        active.style.opacity = "0";
        active.classList.remove("active-card");
        // opening next object
        list[0].style.display = "flex";
        setTimeout(delay, 100);
        function delay() {
          list[0].style.opacity = "1";
          list[0].classList.add("active-card");
        }
      } else {
        // closing actual object
        active.style.display = "none";
        active.style.opacity = "0";
        active.classList.remove("active-card");
        // opening next object
        list[i + 1].style.display = "flex";
        setTimeout(delay1, 100);
        function delay1() {
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

  for (let i = 0; i < list.length; i++) {
    if (list[i] == active) {
      if (i == 0) {
        // closing actual object
        active.style.display = "none";
        active.style.opacity = "0";
        active.classList.remove("active-card");
        // opening next object
        list[(list.length - 1)].style.display = "flex";
        setTimeout(delay, 100);
        function delay() {
          list[(list.length - 1)].style.opacity = "1";
          list[(list.length - 1)].classList.add("active-card");
        }
      } else {
        // closing actual object
        active.style.display = "none";
        active.style.opacity = "0";
        active.classList.remove("active-card");
        // opening next object
        list[i - 1].style.display = "flex";
        setTimeout(delay1, 100);
        function delay1() {
          list[i - 1].style.opacity = "1";
          list[i - 1].classList.add("active-card");
        }
      }
    }
  }
}
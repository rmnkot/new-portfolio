// Open contact window
function openContact() {
  const modalStyle = document.querySelector("#contact").style;
  if (modalStyle.opacity == "1") {
    modalStyle.display = "block";
    setTimeout(scaleIn, 100);
    function scaleIn() {
      modalStyle.transform = "scale(1)";
    }
  } else {
    modalStyle.opacity = "1";
    modalStyle.display = "block";
    setTimeout(scaleIn, 100);
    function scaleIn() {
      modalStyle.transform = "scale(1)";
    }
  }

}

// Close contact window
function closeContact() {
  const modalStyle = document.querySelector("#contact").style;
  modalStyle.opacity = "0";
  setTimeout(scaleOut, 400);
  function scaleOut() {
    modalStyle.transform = "scale(0)";
    modalStyle.display = "none";

  }
}

// Close contact window when the user clicks anywhere outside of the modal
document.querySelector("#contact").addEventListener("click", closeContactTest)

function closeContactTest(event) {
  const modal = document.querySelector("#contact");
  if (event.target == modal) {
    closeContact();
  }
}
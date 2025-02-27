const accordion = document.querySelector(".accordion");

const imgcontainer = document.querySelector(".img-container");

const bodyhero1 = document.querySelector("body .hero");

const bodyhero2 = document.querySelector("body .hero-2");

if (accordion) {
  ScrollReveal().reveal(accordion, {
    origin: "bottom",
    distance: "50px",
    duration: 1300,
  }); //accordion slides in
}

if (imgcontainer) {
  ScrollReveal().reveal(imgcontainer, {
    origin: "right",
    distance: "50px",
    duration: 1300,
  }); // hero img slides in
}

if (bodyhero1) {
  ScrollReveal().reveal(bodyhero1, {
    origin: "bottom",
    distance: "50px",
    duration: 1300,
  }); //rest of hero slides in from bottom
}

if (bodyhero2) {
  ScrollReveal().reveal(bodyhero2, {
    origin: "bottom",
    distance: "50px",
    duration: 1300,
  }); //rest of hero slides in from bottom
}

let topbutton = document.getElementById("bttop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var carousel = document.querySelector("#testimonialSlider");
var testimonialCarousel = new bootstrap.Carousel(carousel);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

document.getElementById("vid").play();

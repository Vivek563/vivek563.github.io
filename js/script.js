// hamburger menu effect 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// close hamburger menu after clicking
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// terminal effect on the hero text 
var typed = new Typed("#typed", {
  strings: [
    "Vivek Maurya",
    "a Design enthusiast.",
    "a Web Developer.",
    "a Android Developer.",
  ],
  
  smartBackspace: true, // Default value
  typeSpeed: 50, 
  backSpeed: 55, 
  loop: true,
  loopCount: Infinity,
  startDelay: 0,
  showCursor: false,
});

//Go to  Top Button

//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Change title when there's no activity in page
function handleVisibilityChange() {
  if (document.visibilityState === "hidden") {
    document.title = 'Come back please';
  } else  {
    document.title = 'Vivek Maurya | Portfolio';
  }
}
document.addEventListener("visibilitychange", handleVisibilityChange, false);
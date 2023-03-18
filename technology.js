import "/technology.css";
import "/reset.css";
import "/var.css";
import "remixicon/fonts/remixicon.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let scrollpos = window.scrollY;
const header = document.querySelector("nav");
const header_height = header.offsetHeight;

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;
  if (scrollpos >= header_height) {
    header.classList.add("nav-scrolled");
  } else {
    header.classList.remove("nav-scrolled");
  }
});


const button = document.querySelector(".switch");
const nav = document.querySelector(".nav-elements");

button.addEventListener("click", function () {
  nav.classList.toggle("active");
});


const logo = document.querySelector(".logo");
const navLinks = document.querySelectorAll(".nav-link");
const icons = document.querySelectorAll(".icon");

gsap.from(icons, {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(logo, {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(navLinks, {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});


const headerTitle = document.querySelector(".hero-title");
const headerButton = document.querySelector(".hero-button");
const headerImage = document.querySelector(".hero-img");
const headerIcons = document.querySelectorAll(".hero-icon");

gsap.from(headerTitle, {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(headerButton, {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(headerImage, {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(headerIcons, {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

const introTitle = document.querySelector(".intro-title");
const introText = document.querySelector(".intro-text");

gsap.from(introTitle, {
  scrollTrigger: {
    trigger: ".intro-title",
    start: "top 80%",
  },
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(introText, {
  scrollTrigger: {
    trigger: ".intro-text",
    start: "top 80%",
  },
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});


const footer = document.querySelector("footer");

gsap.from(footer, {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  duration: 1,
  stagger: 0,
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});
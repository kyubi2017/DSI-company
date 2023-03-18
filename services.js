import "/services.css";
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

const headerText = document.querySelector("header");

gsap.from(headerText, {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".header-text",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});


const waves = document.querySelector(".waves");

gsap.from(waves, {
  duration: 1.5,
  x: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.8,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".waves",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});


const introText = document.querySelector(".intro-text");
const introImg = document.querySelector(".intro-img");

gsap.from(introText, {
  duration: 1.5,
  x: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".intro-text",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(introImg, {
  duration: 1.5,
  x: 100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".intro-img",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
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
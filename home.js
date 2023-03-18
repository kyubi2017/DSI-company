import "/home.css";
import "/reset.css";
import "/var.css";
import "remixicon/fonts/remixicon.css";
import VanillaTilt from "vanilla-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

const heroText = document.querySelector(".hero-text");
const heroImage = document.querySelector(".hero-photo");

gsap.from(heroText, {
  duration: 2,
  x: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(heroImage, {
  duration: 2,
  x: 100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
});

const introText = document.querySelector(".intro-text");
const introImage = document.querySelector(".intro-img");

gsap.from(introText, {
  duration: 2,
  x: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".intro-text",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(introImage, {
  duration: 2,
  x: 100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".intro-img",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

const servicesTitle = document.querySelector(".service-text");

gsap.from(servicesTitle, {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".service-text",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});


const servicesCards = document.querySelectorAll(".card");

gsap.from(servicesCards, {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power4.out",
  delay: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".card",
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

const card = document.querySelectorAll(".card");
VanillaTilt.init(card);
element.addEventListener("tiltChange", callback);


document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});
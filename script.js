gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top center"
  },
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".services .col-md-4", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

gsap.from(".team .col-md-4", {
  scrollTrigger: {
    trigger: ".team",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

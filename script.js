// Slide down navbar
gsap.to(".navbar", {
  y: 0,
  duration: 1,
  ease: "power3.out"
});

// Hero animation
gsap.from(".hero-title", {
  y: -50,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "power2.out"
});
gsap.from(".hero-subtitle", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0.6
});

// Pulse animation
gsap.to(".pulse", {
  scale: 1.05,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  duration: 1
});

// Scroll fade-ins
gsap.utils.toArray('.fade-in').forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: -20,
    duration: 1,
    ease: "power2.out"
  });
});

// Toggle mobile nav
function toggleMenu() {
  document.getElementById('nav').classList.toggle('show');
}

// Add animation class to elements when the page loads
window.addEventListener("load", function () {
    const elements = document.querySelectorAll(".animate__fadeInUp");
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
        },
      }
    );
  });

function goBack() {
  window.history.back();
}
  
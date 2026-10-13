document.addEventListener("DOMContentLoaded", () => {
  const heroSlider = document.querySelector(".hero-slider");
  if (!heroSlider) return;

  const slides = [...heroSlider.querySelectorAll(".slide")];
  const dots = [...heroSlider.querySelectorAll(".slider-dot")];
  const nextButton = heroSlider.querySelector(".slider-next");
  const prevButton = heroSlider.querySelector(".slider-prev");
  if (slides.length < 2) return;

  let currentSlide = Math.max(0, slides.findIndex(slide => slide.classList.contains("active")));
  let slideTimer;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === currentSlide));
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
      dot.setAttribute("aria-selected", i === currentSlide ? "true" : "false");
    });
  }
  function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => showSlide(currentSlide + 1), 6000);
  }
  if (nextButton) nextButton.addEventListener("click", () => { showSlide(currentSlide + 1); resetTimer(); });
  if (prevButton) prevButton.addEventListener("click", () => { showSlide(currentSlide - 1); resetTimer(); });
  dots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); resetTimer(); }));

  document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") { showSlide(currentSlide + 1); resetTimer(); }
    if (event.key === "ArrowLeft") { showSlide(currentSlide - 1); resetTimer(); }
  });
  let touchStartX = 0;
  heroSlider.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].screenX; }, {passive:true});
  heroSlider.addEventListener("touchend", event => {
    const delta = event.changedTouches[0].screenX - touchStartX;
    if (delta < -50) showSlide(currentSlide + 1);
    if (delta > 50) showSlide(currentSlide - 1);
    if (Math.abs(delta) > 50) resetTimer();
  }, {passive:true});
  resetTimer();
});

document.addEventListener('DOMContentLoaded', () => {
  const sliderSections = document.querySelectorAll('.slider-section');

  sliderSections.forEach((section) => {
    const track = section.querySelector('.slider-track');
    const slideElements = track.querySelectorAll('.slide'); // Изменено: ищем .slide, а не img
    const prevBtn = section.querySelector('.prev-btn');
    const nextBtn = section.querySelector('.next-btn');

    let currentIndex = 0;
    const totalSlides = slideElements.length;

    if (totalSlides < 1) return;

    // Теперь ширину слайда возьмём с элемента .slide
    const slideWidth = slideElements[0].clientWidth;

    function goToSlide(index) {
      currentIndex = index;
      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });

    // На старте устанавливаем слайдер в первую позицию
    goToSlide(currentIndex);
  });
});


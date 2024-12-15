document.addEventListener('DOMContentLoaded', () => {
  const sliderSections = document.querySelectorAll('.slider-section');

  sliderSections.forEach((section) => {
    const track = section.querySelector('.slider-track');
    const slides = track.querySelectorAll('img');
    const prevBtn = section.querySelector('.prev-btn');
    const nextBtn = section.querySelector('.next-btn');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Проверяем, есть ли слайды
    if (totalSlides < 1) return;

    // Получаем ширину одного слайда
    const slideWidth = slides[0].clientWidth;

    // Функция для перехода к определённому слайду по индексу
    function goToSlide(index) {
      currentIndex = index;
      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Событие на кнопку "Предыдущий слайд"
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });

    // Событие на кнопку "Следующий слайд"
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  });
});

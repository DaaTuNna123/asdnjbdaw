document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const gameListItems = document.querySelectorAll('.game-list li');
  let currentIndex = 0;
  let intervalId; 

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentIndex = index;
  }

  function startSlideshow() { 
    intervalId = setInterval(showNextSlide, 3000); 
  }

  function showNextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  gameListItems.forEach(item => {
    item.addEventListener('click', function() {
      const slideIndex = parseInt(this.dataset.slide);
      showSlide(slideIndex);

      clearInterval(intervalId); 
      startSlideshow(); 
    });
  });

  
  showSlide(0);
  startSlideshow(); 
});

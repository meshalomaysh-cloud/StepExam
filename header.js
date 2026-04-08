function scrollSlider(direction) {
  const slider = document.getElementById('slider');
  if (!slider) return;

  const slideWidth = slider.clientWidth;
  const totalWidth = slider.scrollWidth;
  const maxScroll = totalWidth - slideWidth;
  const currentPos = Math.abs(slider.scrollLeft);

  if (direction === -1) {
    if (currentPos >= maxScroll - 5) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  } 
  else if (direction === 1) {
    if (currentPos <= 5) {
      slider.scrollTo({ left: -maxScroll, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  }
}
const stars = document.querySelectorAll('.star');
const message = document.getElementById('rating-message');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-value');
    
    stars.forEach(s => s.classList.remove('selected'));
    
    star.classList.add('selected');
    
    message.innerText = `شكراً على التقييم! ${rating} من 5 نجوم.`;
    
    console.log("التقييم الجديد:", rating);
  });
});

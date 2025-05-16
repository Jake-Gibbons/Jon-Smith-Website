// Extracted from <script> in index.html
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
    const ans = item.querySelector('.faq-answer');
    ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
  });
});
(function() {
  const track = document.querySelector('#testimonials .carousel-track');
  const prev = document.querySelector('#testimonials .carousel-arrow.left');
  const next = document.querySelector('#testimonials .carousel-arrow.right');
  const container = document.querySelector('#testimonials');
  const slides = track.children;
  const indicators = document.querySelector('#testimonials .carousel-indicators');
  const count = slides.length / 2;
  let idx = 0, auto = true, interval;

  // Create indicators
  for (let i = 0; i < count; i++) {
    const btn = document.createElement('button');
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => { auto = false; move(i); setTimeout(() => auto = true, 6000); });
    indicators.appendChild(btn);
  }
  const dots = indicators.querySelectorAll('button');

  function updateIndicators() {
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx % count));
  }

  function move(i) {
    idx = (i + count) % count;
    const width = container.offsetWidth;
    track.style.transform = `translateX(-${width * idx}px)`;
    updateIndicators();
  }

  next.addEventListener('click', () => { auto = false; move(idx + 1); setTimeout(() => auto = true, 6000); });
  prev.addEventListener('click', () => { auto = false; move(idx - 1); setTimeout(() => auto = true, 6000); });

  interval = setInterval(() => auto && move(idx + 1), 3500);
  window.addEventListener('resize', () => move(idx));
})();

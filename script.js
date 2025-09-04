const jar = document.getElementById('jar');

jar.addEventListener('click', () => {
  // Bounce animation
  jar.classList.add('bounce');
  setTimeout(() => { jar.classList.remove('bounce'); }, 400);
});

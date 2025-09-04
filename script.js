const jar = document.getElementById('jar');

jar.addEventListener('click', () => {
  // Add bounce animation
  jar.classList.add('bounce');
  
  // Remove class after animation finishes so it can bounce again
  setTimeout(() => {
    jar.classList.remove('bounce');
  }, 400);
});


function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('theme-toggle');
  const darkElements = document.querySelectorAll('footer, .intro-sec, .about-card, .card');

  body.classList.toggle('dark');
  darkElements.forEach(el => el.classList.toggle('dark'));

  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  button.innerHTML = isDark ? "☀️" : "🌙";
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const button = document.getElementById('theme-toggle');
  const darkElements = document.querySelectorAll('footer, .intro-sec, .about-card, .card');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    darkElements.forEach(el => el.classList.add('dark'));
    if (button) button.innerHTML = "☀️";
  } else {
    if (button) button.innerHTML = "🌙";
  }
});
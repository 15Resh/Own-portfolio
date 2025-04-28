function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
}
const button = document.getElementById('themeToggle');

if (button) {
    const html = document.documentElement;
    const header = document.getElementById("header");
    const markdownTheme = document.getElementById("markdown-theme-css");
    const STORAGE_KEY = 'theme';

    function applyTheme(theme) {
        html.setAttribute('data-bs-theme', theme);

        if (header) {
            header.setAttribute('data-bs-theme', theme);

            if (theme === 'dark') {
                header.classList.remove('navbar-dark', 'bg-dark');
                header.classList.add('navbar-dark', 'bg-primary');
            } else {
                header.classList.remove('navbar-dark', 'bg-dark');
                header.classList.add('navbar-dark', 'bg-dark');
            }
        }

        if (markdownTheme) {
            markdownTheme.href = theme === 'dark'
                ? 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css'
                : 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css';
        }

        button.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    button.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

        applyTheme(nextTheme);
        localStorage.setItem(STORAGE_KEY, nextTheme);
    });
}
function setTheme(theme) {
    document.body.className = theme;
}

function toggleDarkMode() {
    const bodyClassList = document.body.classList;
    const toggleButtonIcon = document.getElementById('themeToggleButton').querySelector('i');

    if (bodyClassList.contains('dark-mode')) {
        bodyClassList.remove('dark-mode');
        toggleButtonIcon.classList.remove('fa-sun');
        toggleButtonIcon.classList.add('fa-moon');
    } else {
        bodyClassList.add('dark-mode');
        toggleButtonIcon.classList.remove('fa-moon');
        toggleButtonIcon.classList.add('fa-sun');
    }
}

document.getElementById('themeToggleCog').addEventListener('click', function() {
    document.querySelector('.theme-switcher').classList.toggle('hidden');
});

// Hide sidebar on link click in small devices
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        const navbarContent = document.getElementById('navbarContent');
        if (window.innerWidth <= 768) {
            navbarContent.classList.remove('show');
        }
    });
});

// Back to top button functionality
const backToTopButton = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

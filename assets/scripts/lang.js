let currentLang = 'ko';

function loadLanguage(lang) {
    fetch(`assets/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                element.textContent = data[key];
            });
        });
}

function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    loadLanguage(currentLang);
}

loadLanguage(currentLang);

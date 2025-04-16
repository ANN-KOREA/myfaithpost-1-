document.getElementById('posterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const verse = document.getElementById('verse').value;
    const buttonText = document.getElementById('buttonText').value;

    const posterHTML = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="container">
        <h1>${title}</h1>
        <p>${verse}</p>
        <a href="question.html" class="button">${buttonText}</a>
        <button onclick="toggleLanguage()">English</button>
    </div>
    <script src="assets/scripts/lang.js"></script>
</body>
</html>`;

    const blob = new Blob([posterHTML], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title.replace(/\s+/g, '_')}.html`;
    link.click();
});

const moonButton = document.querySelector(".fa-sun");
let theme = localStorage.getItem("theme") || "dark"; // Récupère le thème depuis le stockage ou utilise le thème sombre par défaut

// Fonction pour mettre à jour le thème
function updateTheme(themeName) {
    if (themeName === "dark") {
        document.documentElement.style.setProperty('--fond', '#262335');
        document.documentElement.style.setProperty('--titres', '#fff');
        document.documentElement.style.setProperty('--texte', '#71689E');
        document.documentElement.style.setProperty('--hover', '#93919a');
        moonButton.classList.add("fa-sun");
        moonButton.classList.remove("fa-moon");
    } else {
        document.documentElement.style.setProperty('--fond', '#DDE7EE');
        document.documentElement.style.setProperty('--titres', '#7DA1BA');
        document.documentElement.style.setProperty('--texte', '#406987');
        document.documentElement.style.setProperty('--hover', '#173B54');
        moonButton.classList.add("fa-moon");
        moonButton.classList.remove("fa-sun");
    }
}

// Mettre à jour le thème lors du chargement de la page
updateTheme(theme);

moonButton.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme); 
    updateTheme(theme);
});


// 🌙 Appliquer le thème sombre au chargement
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// 🌗 Permet de basculer le thème clair/sombre
['theme-toggle-mobile', 'theme-toggle-desktop'].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
});

// 🍔 Menu mobile toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const menu = document.getElementById("menu-links");
      if (menu) menu.classList.toggle("show");
    });
  }

  // 🔐 Affichage conditionnel des boutons "Connexion" / "Déconnexion"
  const isConnected = sessionStorage.getItem("connected") === "true";

  // Affiche ou masque les boutons "Déconnexion"
  const logoutButtons = document.querySelectorAll('button[onclick="logout()"]');
  logoutButtons.forEach(btn => {
    btn.style.display = isConnected ? "inline-block" : "none";
  });

  // Affiche ou masque les liens "Se connecter"
  const loginLinks = document.querySelectorAll('a[href="login.html"]');
  loginLinks.forEach(link => {
    link.style.display = isConnected ? "none" : "inline-block";
  });

  // Afficher un message de bienvenue si l'élément existe
  const welcome = document.getElementById("welcome-msg");
  if (welcome && isConnected) {
    welcome.textContent = "🟢 Bonjour Romane, vous êtes connectée.";
  }

  // Rediriger les pages privées si non connecté
  const isPublic = window.location.pathname.includes("index.html") || window.location.pathname === "/";
  if (!isPublic && !isConnected) {
    window.location.href = "index.html";
  }
});

// 🚪 Déconnexion
function logout() {
  sessionStorage.removeItem("connected");
  window.location.href = "index.html";
}
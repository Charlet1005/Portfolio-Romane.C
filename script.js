// Mode sombre
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

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

// Menu mobile toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const menu = document.getElementById("menu-links");
      if (menu) menu.classList.toggle("show");
    });
  }

  // Cacher le bouton de déconnexion si non connecté
  if (sessionStorage.getItem("connected") !== "true") {
    const logoutButtons = document.querySelectorAll('button[onclick="logout()"]');
    logoutButtons.forEach(btn => btn.style.display = "none");
  }

  // Message de bienvenue
  if (sessionStorage.getItem("connected") === "true") {
    const welcome = document.getElementById("welcome-msg");
    if (welcome) {
      welcome.textContent = "🟢 Bonjour Romane, vous êtes connectée.";
    }
  }
});

// Déconnexion
function logout() {
  sessionStorage.removeItem("connected");
  window.location.href = "index.html";
}

// Redirection si non connecté (à utiliser seulement sur les pages privées !)
if (
  location.pathname !== "/index.html" &&
  sessionStorage.getItem("connected") !== "true"
) {
  window.location.href = "index.html";
}
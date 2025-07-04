// 🌙 Appliquer le thème sombre au chargement
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// 🌗 Bascule entre clair et sombre
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

  const isConnected = sessionStorage.getItem("connected") === "true";

  // 🔐 Affichage conditionnel des liens
const logoutLinks = document.querySelectorAll('a[onclick="logout()"]');
logoutLinks.forEach(link => {
  link.style.display = isConnected ? "inline-block" : "none";
});

  const loginLinks = document.querySelectorAll('a[href="login.html"]');
  loginLinks.forEach(link => {
    link.style.display = isConnected ? "none" : "inline-block";
  });

  // 🔐 Protection des pages privées (hors index.html et login.html)
  const publicPages = ["index.html", "login.html", ""];
  const currentPage = window.location.pathname.split("/").pop();

  if (!publicPages.includes(currentPage) && !isConnected) {
    window.location.href = "index.html";
  }
});

function logout() {
  sessionStorage.removeItem("connected");
  window.location.href = "index.html";
}


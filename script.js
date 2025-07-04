// 🌙 Appliquer le thème sombre au chargement
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// ✅ Tout le reste dans UN SEUL DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // 🌗 Bascule clair/sombre
  ['theme-toggle-mobile', 'theme-toggle-desktop'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }
  });

  // 🍔 Menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const menuLinks = document.getElementById("menu-links");

  if (menuToggle && menuLinks) {
    menuToggle.addEventListener("click", () => {
      menuLinks.classList.toggle("show");
      menuLinks.classList.toggle("hidden"); // ← pour basculer l'affichage
    });
  }

  // 🔐 Connexion (uniquement si on est sur login.html)
  const loginBtn = document.getElementById("login-btn");
  const errorMsg = document.getElementById("error-msg");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if (user === "romane" && pass === "batterie78") {
        sessionStorage.setItem("connected", "true");
        window.location.href = "index.html";
      } else {
        if (errorMsg) {
          errorMsg.textContent = "Identifiants incorrects !";
          errorMsg.classList.add("show");
          setTimeout(() => errorMsg.classList.remove("show"), 3000);
        }
      }
    });
  }

  // 🔓 Affichage conditionnel login/logout
  const isConnected = sessionStorage.getItem("connected") === "true";

  document.querySelectorAll('a[onclick="logout()"]').forEach(link => {
    link.style.display = isConnected ? "inline-block" : "none";
  });

  document.querySelectorAll('a[href="login.html"]').forEach(link => {
    link.style.display = isConnected ? "none" : "inline-block";
  });

  // 🚫 Redirection si non connecté (sauf pages publiques)
  const publicPages = ["index.html", "login.html", ""];
  const currentPage = window.location.pathname.split("/").pop();
  if (!publicPages.includes(currentPage) && !isConnected) {
    window.location.href = "index.html";
  }
});

// 🚪 Déconnexion
function logout() {
  sessionStorage.removeItem("connected");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const includeHTML = (selector, url) => {
    fetch(url)
      .then(res => res.text())
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      });
  };

  includeHTML("header", "../layouts/header.html");
  includeHTML("footer", "../layouts/footer.html");
});

document.addEventListener('DOMContentLoaded', () => {
  const counterValue = document.querySelector('.counter-value');
  const target = parseInt(counterValue.getAttribute('data-target'));
  let count = 0;
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 16ms per frame

  const updateCounter = () => {
      if (count < target) {
          count += increment;
          counterValue.textContent = Math.ceil(count);
          requestAnimationFrame(updateCounter);
      } else {
          counterValue.textContent = target;
      }
  };

  updateCounter();
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function(event) {
      form.classList.add('submitting');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const modal = document.querySelector('.confirmation-modal');
  const closeModalButton = document.querySelector('.close-modal');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      form.classList.add('submitting');

      // Simulate form submission delay (replace with actual submission logic)
      setTimeout(() => {
          form.classList.remove('submitting');
          modal.classList.add('show');
          form.reset();
      }, 2000); // 2 seconds delay
  });

  closeModalButton.addEventListener('click', function() {
      modal.classList.remove('show');
  });
});

const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  localStorage.setItem("theme", current === "dark" ? "light" : "dark");
};

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const value = bar.getAttribute('data-skill-percentage');
    bar.style.setProperty('--skill-value', value + '%');
    bar.style.setProperty('position', 'relative');
    bar.innerHTML = `<div style="
      width: ${value}%;
      height: 100%;
      background: #ffcc00;;
      border-radius: 8px;
      transition: width 1.2s ease-in-out;
    "></div>`;
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-toggle-button');
  const navMenu = document.getElementById('nav-menu');

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

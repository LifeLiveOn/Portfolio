function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load header and footer
loadHTML('header.html', 'header');
loadHTML('footer.html', 'footer');


function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      const navLinks = document.querySelector('.nav__links');
  
      function checkScreenWidth() {
          if (window.innerWidth <= 500) {
              navLinks.style.display = 'none';
              mobileMenu.style.display = 'block';
          } else {
              navLinks.style.display = 'flex';
              mobileMenu.style.display = 'none';
          }
      }
  
      // Initial check on page load
      checkScreenWidth();
  
      // Check on window resize
      window.addEventListener('resize', checkScreenWidth);
      window.addEventListener('load', checkScreenWidth);
  });
  


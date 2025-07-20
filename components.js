
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="navbar-container">
          <a href="/" class="navbar-logo">
            <img src="/logo.png" alt="Seasons International Education Consultancy">
            <span class="logo-text">Seasons International Education Consultancy</span>
          </a>
          <div class="menu-icon">
            <i class="fas fa-bars"></i>
          </div>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="/" class="nav-links">Home</a>
            </li>
            <li class="nav-item">
              <a href="/about/" class="nav-links">About</a>
            </li>
            <li class="nav-item">
              <a href="/contact/" class="nav-links">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-logo">
            <a href="/">
              <img src="/logo.png" alt="Seasons International Education Consultancy">
            </a>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about/">About</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>Contact Us</h4>
            <p><a href="https://www.google.com/maps/search/?api=1&query=Chipledhunga,+Pokhara,+Kaski,+Nepal" target="_blank" rel="noopener noreferrer"><i class="fas fa-map-marker-alt"></i> Chipledhunga, Pokhara, Kaski, Nepal</a></p>
            <p><a href="tel:+9779856088959"><i class="fas fa-phone"></i> +9779856088959</a></p>
            <p><a href="mailto:info@seasonsintedu.com"><i class="fas fa-envelope"></i> info@seasonsintedu.com</a></p>
          </div>
          <div class="footer-social">
            <h4>Follow Us</h4>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Seasons International Education Consultancy. All Rights Reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);

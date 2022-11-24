import React from "react";
import './footer.css'

function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3 class="logo fs-3">
            GetYoMovies
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">VISIANI © 2022</p>

        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#">
            <i class="fa-brands fa-facebook"></i>            </a>
            <a href="#">
            <i class="fa-brands fa-twitter"></i>            </a>
            <a href="#">
            <i class="fa-brands fa-instagram"></i>            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

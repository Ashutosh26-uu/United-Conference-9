import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>United University Pharmacy Conference 2025</h3>
          <p>“Fostering Innovation for a Healthier
            Tomorrow: Navigating the Future of
            Pharmaceutical Sciences’’
            FIHTNFPS - 2025</p>
          <p>7<sup>th</sup> to 8<sup>th</sup> November 2025</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#papers">Abstract</a></li>
            <li><a href="#registration">Registration</a></li>
            <li><a href="#speakers">Speakers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p> 📧 <a href="mailto:confpharm@uniteduniversity.edu.in">confpharm@uniteduniversity.edu.in</a></p>
          <p> 📞 +91-9696286985 / +91-8953167208</p>
          <p> 📍 Rawatpur, Jhalwa, Prayagraj, Uttar Pradesh</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/company/united-university-allahabad/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.instagram.com/united_university/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.facebook.com/share/1E5dGXGmNF/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link facebook"
              aria-label="Facebook"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a 
              href="https://twitter.com/united_univ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link twitter"
              aria-label="Twitter"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a 
              href="https://www.youtube.com/@uniteduniversityprayagraj4325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link youtube"
              aria-label="YouTube"
            >
              <FaYoutube />
              <span>YouTube</span>
            </a>
            <a 
              href="mailto:confpharm@uniteduniversity.edu.in"
              className="social-link email"
              aria-label="Email"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 United University National Pharmacy Confrence 2025. All rights reserved.</p>
        <p className="developer-credit">Created By Ashutosh Mishra (B.tech 2<sup>nd</sup> Year)</p>
      </div>
    </footer>
  );
};

export default Footer;
"use client"
import React from "react";
import './Footer.css';

const paymentIcons = [
  { src: "/assets/apple-pay.svg", alt: "Apple Pay" },
  { src: "/assets/google-pay.svg", alt: "Google Pay" },
  { src: "/assets/visa.svg", alt: "Visa" },
  { src: "/assets/mastercard.svg", alt: "Mastercard" },
  { src: "/assets/amex.svg", alt: "Amex" },
  { src: "/assets/paypal.svg", alt: "PayPal" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="section-title">BE THE FIRST TO KNOW</div>
            <div className="section-description">
              Signup for updates from metta muse.
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="email-input"
              />
              <button type="submit" className="subscribe-button">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="footer-section">
            <div className="section-title">CONTACT US</div>
            <div className="contact-info">
              <div className="contact-item">+44 221 133 5360</div>
              <div className="contact-item contact-email">customercare@mettamuse.com</div>
            </div>
            <div className="section-title">CURRENCY</div>
            <div className="currency-display">USD</div>
            <div className="currency-note">
              Transactions will be completed in Euros and currency reference available in hover.
            </div>
          </div>

          <div className="footer-section">
            <div className="company-name">metta muse</div>
            <div className="footer-links">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Stories</a>
              <a href="#" className="footer-link">Artisans</a>
              <a href="#" className="footer-link">Boutiques</a>
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">FAQs</a>
              <a href="#" className="footer-link">Terms & Conditions</a>
              <a href="#" className="footer-link">Shipping & Returns</a>
              <a href="#" className="footer-link">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="payment-section">
          <div className="section-title">WE ACCEPT</div>
          <div className="payment-icons">
            {paymentIcons.map((icon, index) => (
              <div key={index} className="payment-icon">
                {icon.alt.split(' ')[0]}
              </div>
            ))}
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} metta muse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
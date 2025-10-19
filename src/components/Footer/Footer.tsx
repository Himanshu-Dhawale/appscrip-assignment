  "use client"
import React, { useState } from "react";
import './Footer.css';
import Image from "next/image";

const paymentIcons = [
  { src: "/ApplePay.png", alt: "Apple Pay" },
  { src: "/GooglePay.png", alt: "Google Pay" },
  { src: "/Pay.png", alt: "Visa" },
  { src: "/Mastercard.png", alt: "Mastercard" },
  { src: "/Amex.png", alt: "Amex" },
  { src: "/Paypal.png", alt: "PayPal" },
];

const Footer = () => {
  

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section: Newsletter & Contact */}
        <div className="two-section">
          {/* Newsletter Section */}
          <div className="footer-section">
            <div className="section-header">
              <div className="section-title">BE THE FIRST TO KNOW</div>
            </div>
            <div className="section-content active">
              <div className="section-description">
                Sign up for updates from mettā muse.
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
          </div>

          {/* Contact & Currency Section */}
          <div className="footer-section">
            <div className="section-header">
              <div className="section-title">CONTACT US</div>
            </div>
            <div className="section-content active">
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
          </div>
        </div>

        <div className="underline"></div>

        {/* Bottom Section: Three Columns */}
        <div className="three-column-section">
          {/* Left Column - mettā muse */}
          <div className="footer-column">
            <div className="section-header">
              <div className="company-name">mettā muse</div>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Stories</a>
              <a href="#" className="footer-link">Artisans</a>
              <a href="#" className="footer-link">Boutiques</a>
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">EU Complianceal Docs</a>
            </div>
          </div>

          {/* Middle Column - QUICK LINKS */}
          <div className="footer-column">
            <div className="section-header">
              <div className="section-title">QUICK LINKS</div>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Orders & Shipping</a>
              <a href="#" className="footer-link">Join/Login as a Seller</a>
              <a href="#" className="footer-link">Payment & Pricing</a>
              <a href="#" className="footer-link">Return & Refunds</a>
              <a href="#" className="footer-link">FAQs</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms & Conditions</a>
            </div>
          </div>

          {/* Right Column - FOLLOW US & Payment */}
          <div className="footer-column">
            <div className="section-header">
              <div className="section-title">FOLLOW US</div>
            </div>
            <div className="social-links">
              {/* Add social media icons here */}
            </div>
            
            <div className="section-header">
              <div className="section-title">mettā muse ACCEPTS</div>
            </div>
            <div className="payment-icons">
              {paymentIcons.map((icon, index) => (
                <Image 
                  src={icon.src} 
                  key={index} 
                  alt={icon.alt} 
                  className="payment-icon" 
                  width={60} 
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
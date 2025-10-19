// "use client"
// import React from "react";
// import './Footer.css';

// const paymentIcons = [
//   { src: "/assets/apple-pay.svg", alt: "Apple Pay" },
//   { src: "/assets/google-pay.svg", alt: "Google Pay" },
//   { src: "/assets/visa.svg", alt: "Visa" },
//   { src: "/assets/mastercard.svg", alt: "Mastercard" },
//   { src: "/assets/amex.svg", alt: "Amex" },
//   { src: "/assets/paypal.svg", alt: "PayPal" },
// ];

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-content">
//           <div className="footer-section">
//             <div className="section-title">BE THE FIRST TO KNOW</div>
//             <div className="section-description">
//               Signup for updates from metta muse.
//             </div>
//             <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
//               <input
//                 type="email"
//                 placeholder="Enter your e-mail..."
//                 className="email-input"
//               />
//               <button type="submit" className="subscribe-button">
//                 SUBSCRIBE
//               </button>
//             </form>
//           </div>

//           <div className="footer-section">
//             <div className="section-title">CONTACT US</div>
//             <div className="contact-info">
//               <div className="contact-item">+44 221 133 5360</div>
//               <div className="contact-item contact-email">customercare@mettamuse.com</div>
//             </div>
//             <div className="section-title">CURRENCY</div>
//             <div className="currency-display">USD</div>
//             <div className="currency-note">
//               Transactions will be completed in Euros and currency reference available in hover.
//             </div>
//           </div>

//           <div className="footer-section">
//             <div className="company-name">metta muse</div>
//             <div className="footer-links">
//               <a href="#" className="footer-link">About Us</a>
//               <a href="#" className="footer-link">Stories</a>
//               <a href="#" className="footer-link">Artisans</a>
//               <a href="#" className="footer-link">Boutiques</a>
//               <a href="#" className="footer-link">Contact Us</a>
//               <a href="#" className="footer-link">FAQs</a>
//               <a href="#" className="footer-link">Terms & Conditions</a>
//               <a href="#" className="footer-link">Shipping & Returns</a>
//               <a href="#" className="footer-link">Privacy Policy</a>
//             </div>
//           </div>
//         </div>

//         <div className="payment-section">
//           <div className="section-title">WE ACCEPT</div>
//           <div className="payment-icons">
//             {paymentIcons.map((icon, index) => (
//               <div key={index} className="payment-icon">
//                 {icon.alt.split(' ')[0]}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="copyright">
//           © {new Date().getFullYear()} metta muse. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



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
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
    };

    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Newsletter Section */}
          <div className="two-section">
          <div className="footer-section">
            <div 
              className="section-header"
              onClick={() => toggleSection('newsletter')}
            >
              <div className="section-title">BE THE FIRST TO KNOW</div>
              <div className="accordion-toggle">
                {openSection === 'newsletter' ? '−' : '+'}
              </div>
            </div>
            <div className={`section-content ${openSection === 'newsletter' ? 'active' : ''}`}>
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
          <div className="footer-section first-section">
            <div 
              className="section-header"
              onClick={() => toggleSection('contact')}
            >
              <div className="section-title">CONTACT US</div>
              <div className="accordion-toggle">
                {openSection === 'contact' ? '−' : '+'}
              </div>
            </div>
            <div className={`section-content ${openSection === 'contact' ? 'active' : ''}`}>
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
          {/* Company Name & Quick Links */}
          <div className="footer-section one">
          <div className={`section-content ${openSection === 'quicklinks' ? 'active' : ''}`}>
              <div className="company-name">mettā muse</div>
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
            <div 
              className="section-header"
              onClick={() => toggleSection('quicklinks')}
            >
              <div className="section-title">QUICK LINKS</div>
              <div className="accordion-toggle">
                {openSection === 'quicklinks' ? '−' : '+'}
              </div>
            </div>
            
          </div>

          {/* Follow Us & Payment Section */}
          <div className="footer-section two">
            <div 
              className="section-header"
              onClick={() => toggleSection('payment')}
            >
            </div>
            <div className={`section-content ${openSection === 'payment' ? 'active' : ''}`}>
              <div className="section-title">FOLLOW US</div>
              <div className="social-links">
                {/* Add social media icons here */}
              </div>
              
              <div className="section-title">mettā muse ACCEPTS</div>
              <div className="payment-icons">
                {paymentIcons.map((icon, index) => (
                  <Image src={icon.src} key={index} alt={icon.alt} className="payment-icon" width={376} height={35}/>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright - Always visible */}
          <div className="copyright">
            Copyright © 2023 mettamuse. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
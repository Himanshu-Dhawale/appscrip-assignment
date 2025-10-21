// "use client"
// import React, { useEffect, useState } from "react";
// import './Footer.css';
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";

// const paymentIcons = [
//   { src: "/ApplePay.png", alt: "Apple Pay" },
//   { src: "/GooglePay.png", alt: "Google Pay" },
//   { src: "/Pay.png", alt: "Visa" },
//   { src: "/Mastercard.png", alt: "Mastercard" },
//   { src: "/Amex.png", alt: "Amex" },
//   { src: "/Paypal.png", alt: "PayPal" },
// ];

// const Footer = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
//     company: true,
//     quickLinks: true,
//     followUs: true,
//   });

//   useEffect(() => {
//     const updateIsMobile = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
//     updateIsMobile();
//     window.addEventListener('resize', updateIsMobile);
//     return () => window.removeEventListener('resize', updateIsMobile);
//   }, []);

//   useEffect(() => {
//     if (isMobile) {
//       setOpenSections({ company: false, quickLinks: false, followUs: false });
//     } else {
//       setOpenSections({ company: true, quickLinks: true, followUs: true });
//     }
//   }, [isMobile]);

//   const toggleSection = (key: 'company' | 'quickLinks' | 'followUs') => {
//     if (!isMobile) return; 
//     setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <div className="section-header">
//             <div className="section-title">BE THE FIRST TO KNOW</div>
//           </div>
//           <div className="section-content active">
//             <div className="section-description">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
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
//         </div>
//         <div className="section-underline"></div>

//         <div className="footer-section">
//           <div className="section-header">
//             <div className="section-title">CALL US</div>
//           </div>
//           <div className="section-content active">
//             <div className="contact-info">
//               <div className="contact-item">+44 221 133 5360</div>
//               <div className="contact-item contact-email">customercare@mettamuse.com</div>
//             </div>
//           </div>
//         </div>
//         <div className="section-underline"></div>

//         {/* Currency Section */}
//         <div className="footer-section">
//           <div className="section-header">
//             <div className="section-title">CURRENCY</div>
//           </div>
//           <div className="section-content active">
//             <div className="currency-display">USD</div>
//           </div>
//         </div>
//         <div className="section-underline"></div>

//         {/* Accordion Section */}
//         <div className="accordion-section">
//           {/* mettā muse */}
//           <div className="accordion-item">
//             <div className="section-header" onClick={() => toggleSection('company')}>
//               <div className="company-name">mettā muse</div>
//               <ChevronDown className={`accordion-toggle ${openSections.company ? 'open' : ''}`} size={20} />
//             </div>
//             <div className={`section-content ${openSections.company ? 'active' : ''}`}>
//               <div className="footer-links">
//                 <a href="#" className="footer-link">About Us</a>
//                 <a href="#" className="footer-link">Stories</a>
//                 <a href="#" className="footer-link">Artisans</a>
//                 <a href="#" className="footer-link">Boutiques</a>
//                 <a href="#" className="footer-link">Contact Us</a>
//                 <a href="#" className="footer-link">EU Complianceal Docs</a>
//               </div>
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div className="accordion-item">
//             <div className="section-header" onClick={() => toggleSection('quickLinks')}>
//               <div className="section-title">QUICK LINKS</div>
//               <ChevronDown className={`accordion-toggle ${openSections.quickLinks ? 'open' : ''}`} size={20} />
//             </div>
//             <div className={`section-content ${openSections.quickLinks ? 'active' : ''}`}>
//               <div className="footer-links">
//                 <a href="#" className="footer-link">Orders & Shipping</a>
//                 <a href="#" className="footer-link">Join/Login as a Seller</a>
//                 <a href="#" className="footer-link">Payment & Pricing</a>
//                 <a href="#" className="footer-link">Return & Refunds</a>
//                 <a href="#" className="footer-link">FAQs</a>
//                 <a href="#" className="footer-link">Privacy Policy</a>
//                 <a href="#" className="footer-link">Terms & Conditions</a>
//               </div>
//             </div>
//           </div>

//           {/* FOLLOW US */}
//           <div className="accordion-item">
//             <div className="section-header" onClick={() => toggleSection('followUs')}>
//               <div className="section-title">FOLLOW US</div>
//               <ChevronDown className={`accordion-toggle ${openSections.followUs ? 'open' : ''}`} size={20} />
//             </div>
//             <div className={`section-content ${openSections.followUs ? 'active' : ''}`}>
//               <div className="social-links">
//                 {/* Social icons could go here */}
//                 <Image src="/Insta.png" alt="instagram" width={32} height={32}/>
//                 <Image src="/a.png" alt="linkedin" width={32} height={32}/>
                
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Payment Section */}
//         <div className="payment-section">
//           <div className="section-header">
//             <div className="section-title">mettā muse ACCEPTS</div>
//           </div>
//           <div className="payment-icons">
//             {paymentIcons.map((icon, index) => (
//               <Image 
//                 src={icon.src} 
//                 key={index} 
//                 alt={icon.alt} 
//                 className="payment-icon" 
//                 width={60} 
//                 height={40}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="copyright">
//           Copyright © 2023 mettamuse. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




"use client"
import React, { useEffect, useState } from "react";
import './Footer.css';
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const paymentIcons = [
  { src: "/ApplePay.png", alt: "Apple Pay" },
  { src: "/GooglePay.png", alt: "Google Pay" },
  { src: "/Pay.png", alt: "Visa" },
  { src: "/Mastercard.png", alt: "Mastercard" },
  { src: "/Amex.png", alt: "Amex" },
  { src: "/Paypal.png", alt: "PayPal" },
];

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    company: false,
    quickLinks: false,
    followUs: false,
  });

  useEffect(() => {
    const updateIsMobile = () => {
      const mobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // On mobile, all sections should start collapsed
      // On desktop, all sections should start expanded
      if (mobile) {
        setOpenSections({ company: false, quickLinks: false, followUs: false });
      } else {
        setOpenSections({ company: true, quickLinks: true, followUs: true });
      }
    };
    
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const toggleSection = (key: 'company' | 'quickLinks' | 'followUs') => {
    if (!isMobile) return; 
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="section-header">
            <div className="section-title">BE THE FIRST TO KNOW</div>
          </div>
          <div className="section-content active">
            <div className="section-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
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
        <div className="section-underline"></div>

        <div className="footer-section">
          <div className="section-header">
            <div className="section-title">CALL US</div>
          </div>
          <div className="section-content active">
            <div className="contact-info">
              <div className="contact-item">+44 221 133 5360</div>
              <div className="contact-item contact-email">customercare@mettamuse.com</div>
            </div>
          </div>
        </div>
        <div className="section-underline"></div>

        {/* Currency Section */}
        <div className="footer-section">
          <div className="section-header">
            <div className="section-title">CURRENCY</div>
          </div>
          <div className="section-content active">
            <div className="currency-display">USD</div>
          </div>
        </div>
        <div className="section-underline"></div>

        {/* Accordion Section */}
        <div className="accordion-section">
          {/* mettā muse */}
          <div className="accordion-item">
            <div className="section-header" onClick={() => toggleSection('company')}>
              <div className="company-name">mettā muse</div>
              <ChevronDown className={`accordion-toggle ${openSections.company ? 'open' : ''}`} size={20} />
            </div>
            <div className={`section-content ${openSections.company ? 'active' : ''}`}>
              <div className="footer-links">
                <a href="#" className="footer-link">About Us</a>
                <a href="#" className="footer-link">Stories</a>
                <a href="#" className="footer-link">Artisans</a>
                <a href="#" className="footer-link">Boutiques</a>
                <a href="#" className="footer-link">Contact Us</a>
                <a href="#" className="footer-link">EU Complianceal Docs</a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="accordion-item">
            <div className="section-header" onClick={() => toggleSection('quickLinks')}>
              <div className="section-title">QUICK LINKS</div>
              <ChevronDown className={`accordion-toggle ${openSections.quickLinks ? 'open' : ''}`} size={20} />
            </div>
            <div className={`section-content ${openSections.quickLinks ? 'active' : ''}`}>
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
          </div>

          {/* FOLLOW US */}
          <div className="accordion-item">
            <div className="section-header" onClick={() => toggleSection('followUs')}>
              <div className="section-title">FOLLOW US</div>
              <ChevronDown className={`accordion-toggle ${openSections.followUs ? 'open' : ''}`} size={20} />
            </div>
            <div className={`section-content ${openSections.followUs ? 'active' : ''}`}>
              <div className="social-links">
                {/* Social icons could go here */}
                <Image src="/Insta.png" alt="instagram" width={32} height={32}/>
                <Image src="/a.png" alt="linkedin" width={32} height={32}/>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment-section">
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
        <div className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
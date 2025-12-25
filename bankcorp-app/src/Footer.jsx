import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
     
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>HomeLoanPro</h3>
          <p>
            Helping you find the best home loan options with transparent rates
            and expert guidance.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home-loans">Home Loans</a></li>
            <li><a href="/eligibility">Eligibility Check</a></li>
            <li><a href="/calculator">EMI Calculator</a></li>
            <li><Link to={'contact'}>Contact Us</Link></li> 
            <li><Link to={'about'}>About Us</Link></li> 
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@homeloanpro.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} HomeLoanPro. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer

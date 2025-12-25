import React, { useState } from 'react'
import './Contact.css'

function Contact() {

     const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <div>
        <div className="contact">
      <div className="contact-container">

        {/* Left – Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have questions about home loans, eligibility, or EMI options?
            Reach out to our experts.
          </p>

          <div className="info-item">
            <span>Email:</span>
            <p>support@homeloanpro.com</p>
          </div>

          <div className="info-item">
            <span>Phone:</span>
            <p>+1 234 567 890</p>
          </div>

          <div className="info-item">
            <span>Address:</span>
            <p>123 Finance Street, New York, USA</p>
          </div>
        </div>

        {/* Right – Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text" name="name" placeholder="Your Name" value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email" name="email" placeholder="Your Email"value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message" placeholder="Your Message"rows="4"value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Contact

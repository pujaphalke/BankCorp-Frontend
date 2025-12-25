import React from 'react'
import './About.css'

function About() {
  return (
    <div>
        <section className="about">
      <div className="about-container">

        {/* Left – Text Content */}
        <div className="about-content">
          <h2>About HomeLoanPro</h2>
          <p>
            HomeLoanPro is dedicated to helping individuals and families achieve
            their dream of owning a home. We provide transparent, affordable,
            and easy-to-understand home loan solutions.
          </p>

          <p>
            Our platform connects you with trusted lenders, competitive interest
            rates, and expert guidance throughout your home-buying journey.
          </p>

          <ul className="about-highlights">
            <li>✔ Competitive interest rates</li>
            <li>✔ Fast eligibility checks</li>
            <li>✔ Simple EMI calculations</li>
            <li>✔ Trusted lending partners</li>
          </ul>
        </div>

        {/* Right – Stats / Info Cards */}
        <div className="about-stats">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="stat-card">
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h3>30+</h3>
            <p>Banking Partners</p>
          </div>

          <div className="stat-card">
            <h3>99%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default About

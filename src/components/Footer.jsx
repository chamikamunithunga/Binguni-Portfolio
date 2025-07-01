import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      platform: 'LinkedIn',
      url: '#',
      icon: '💼'
    },
    {
      platform: 'Email',
      url: 'bigunisenarathne7@gmail.com',
      icon: '📧'
    },
    {
      platform: 'Phone',
      url: 'tel:0771231232',
      icon: '📱'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <h3>Binguni Senarathne</h3>
              <p> Project Manager</p>
            </div>
            <p className="footer-description">
              Transforming complex challenges into successful outcomes through 
              strategic project leadership and innovative solutions.
            </p>
            <div className="footer-stats">
              <div className="footer-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>

          <div className="footer-section footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <p>📍 Sri lanka</p>
              <p>📧 bigunisenarathne7@gmail.com</p>
              <p>📱 077 123 1232</p>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.platform}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section footer-newsletter">
            <h4>Professional Updates</h4>
            <p>Stay updated with project management insights and industry trends.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
            <div className="certifications-mini">
              <span>🏆 PMP</span>
              <span>🎓 CSM</span>
              <span>🔧 Six Sigma</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Biguni Senarathne. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms of Service</a>
              <span>•</span>
              <button onClick={scrollToTop} className="back-to-top">
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('Thank you for your message! I\'ll get back to you within 24 hours.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'bingunisenarathne7@gmail.com',
      link: 'mailto:ddvfvfvff'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/bingunisenarathne',
      link: 'https://linkedin.com/in/sarahjohnsonpm'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '077 123 2341',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Sri Lanka',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Let's Work Together</h2>
          <p>Ready to discuss your next project? I'd love to hear from you.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p className="contact-description">
              Whether you're looking for a project manager to lead your next initiative, 
              need consultation on process improvement, or want to discuss collaboration 
              opportunities, I'm here to help.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <h4>Current Availability</h4>
              <div className="availability-status">
                <span className="status-indicator available"></span>
                <span>Available for new projects</span>
              </div>
              <p>I'm currently accepting new project management opportunities and consulting engagements.</p>
            </div>

            <div className="response-time">
              <h4>Response Time</h4>
              <p>📞 Phone calls: Same day</p>
              <p>📧 Emails: Within 24 hours</p>
              <p>💼 Project inquiries: Within 48 hours</p>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="project-management">Project Management</option>
                    <option value="consultation">Consultation</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, timeline, and how I can help..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus && (
                <div className="submit-status success">
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
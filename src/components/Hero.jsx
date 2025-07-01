import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Binguni Senarathne</span>
            </h1>
            <h2> Project Manager</h2>
            <p className="hero-description">
              Passionate project manager driving teams to success through effective Agile methodologies.
              Transforming challenges into opportunities with strategic problem-solving and collaborative leadership.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">$2M+</span>
                <span className="stat-label">Budget Managed</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">On-Time Delivery</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProjects}>
                View Projects
              </button>
              <button className="btn-secondary" onClick={scrollToContact}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img 
                src="/images/bg.png" 
                alt="Binguni Senarathne -  Project Manager"
                className="profile-photo"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <span>Add Your Professional Photo</span>
                <small>Save the bg.png image to: /public/images/bg.png</small>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 

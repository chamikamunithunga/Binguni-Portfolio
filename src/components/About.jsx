import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>About Me</h2>
          <p>Driving success through strategic project leadership</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              As a seasoned Project Manager with over 2 years of experience, I specialize in 
              transforming complex challenges into successful outcomes. My expertise spans across 
              various industries including technology, healthcare, and finance.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>🎯 Strategic Planning</h3>
                <p>Expert in developing comprehensive project roadmaps and aligning stakeholder objectives with business goals.</p>
              </div>
              
              <div className="highlight-item">
                <h3>👥 Team Leadership</h3>
                <p>Proven track record of leading cross-functional teams of up to 20+ members across multiple time zones.</p>
              </div>
              
              <div className="highlight-item">
                <h3>📊 Process Optimization</h3>
                <p>Implemented Agile and Lean methodologies resulting in 30% improvement in project delivery times.</p>
              </div>
              
              <div className="highlight-item">
                <h3>💼 Risk Management</h3>
                <p>Developed comprehensive risk assessment frameworks that reduced project failures by 40%.</p>
              </div>
            </div>
            
            <div className="certifications">
              <h3>Certifications & Education</h3>
              <ul>
                <li> 🎓 First class Honors Degree in Bachelor of Business Administration , Specializing in Management of MIS</li>
                <li>🏆 Certified Scrum Master </li>
                
                
              </ul>
            </div>
          </div>
          
          <div className="about-values">
            <h3>My Approach</h3>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-icon">🚀</span>
                <h4>Innovation</h4>
                <p>Embracing new technologies and methodologies to drive project success</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <h4>Collaboration</h4>
                <p>Building strong relationships and fostering open communication</p>
              </div>
              <div className="value-item">
                <span className="value-icon">⚡</span>
                <h4>Efficiency</h4>
                <p>Optimizing processes and eliminating waste to maximize value delivery</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <h4>Results</h4>
                <p>Focused on delivering measurable outcomes that exceed expectations</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 
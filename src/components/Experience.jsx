import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "EY GDS (CS) Lanka (Private) Limited",
      position: "Project Manager",
      duration: "2025 - Present",
      description: "Leading digital transformation initiatives for Fortune 500 clients. Managed a portfolio of 15+ concurrent projects with budgets exceeding $2M.",
      achievements: [
        "Reduced project delivery time by 35% through Agile implementation",
        "Increased client satisfaction scores from 7.2 to 9.1/10",
        "Led cross-functional team of 25+ developers, designers, and analysts",
        "Implemented new project tracking system reducing overhead by 20%"
      ]
    },


    {
      id: 2,
      company: "CodeGen.",
      position: "Project Manager",
      duration: "2025 - 2025",
      description: "Oversaw product development lifecycle for SaaS applications. Coordinated between engineering, design, and business stakeholders.",
      achievements: [
        "Successfully launched 8 products that generated $5M in annual revenue",
        "Established quality assurance processes reducing bugs by 45%",
        "Mentored 5 junior project coordinators",
        "Achieved 98% on-time delivery rate across all projects"
      ]
    },

    {
      id: 3,
      company: "Wso2",
      position: "Product Coordinator",
      duration: "2024 - 2025",
      description: "Managed early-stage product development in a fast-paced startup environment. Wore multiple hats from planning to execution.",
      achievements: [
        "Coordinated MVP development that secured $2M Series A funding",
        "Implemented project management tools increasing team productivity by 40%",
        "Managed vendor relationships and external partnerships",
        "Created documentation standards adopted company-wide"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2>Professional Experience</h2>
          <p>8+ years of driving project success across diverse industries</p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="company-info">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                  <span className="duration">{exp.duration}</span>
                </div>
                
                <p className="description">{exp.description}</p>
                
                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 












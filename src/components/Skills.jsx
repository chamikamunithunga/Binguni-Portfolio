import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: "Project Management Methodologies",
      skills: [
        { name: "Agile/Scrum", level: 95, icon: "🔄" },
        { name: "Waterfall", level: 90, icon: "📋" },
        { name: "Kanban", level: 85, icon: "📊" },
        { name: "Lean", level: 80, icon: "⚡" },
        { name: "Six Sigma", level: 75, icon: "🎯" }
      ]
    },
    {
      category: "Tools & Software",
      skills: [
        { name: "Jira", level: 95, icon: "🔧" },
        { name: "Microsoft Project", level: 90, icon: "📅" },
        { name: "Slack", level: 95, icon: "💬" },
        { name: "Confluence", level: 85, icon: "📝" },
        { name: "Trello", level: 88, icon: "📌" }
      ]
    },
    {
      category: "Leadership & Soft Skills",
      skills: [
        { name: "Team Leadership", level: 98, icon: "👥" },
        { name: "Stakeholder Management", level: 95, icon: "🤝" },
        { name: "Communication", level: 96, icon: "🗣️" },
        { name: "Problem Solving", level: 92, icon: "🧩" },
        { name: "Conflict Resolution", level: 88, icon: "⚖️" }
      ]
    },
    {
      category: "Business & Analytics",
      skills: [
        { name: "Budget Management", level: 93, icon: "💰" },
        { name: "Risk Assessment", level: 90, icon: "⚠️" },
        { name: "Data Analysis", level: 85, icon: "📈" },
        { name: "Process Improvement", level: 92, icon: "🔄" },
        { name: "Strategic Planning", level: 88, icon: "🎯" }
      ]
    }
  ]

  const certifications = [
    {
      name: "Project Management Professional (PMP)",
      issuer: "PMI",
      year: "2019",
      icon: "🏆"
    },
    {
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      year: "2018",
      icon: "🎓"
    },
    {
      name: "Six Sigma Green Belt",
      issuer: "ASQ",
      year: "2020",
      icon: "🔧"
    },
    {
      name: "Agile Certified Practitioner (PMI-ACP)",
      issuer: "PMI",
      year: "2021",
      icon: "⚡"
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Comprehensive skill set for successful project delivery</p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-section">
            <h3>Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <span className="cert-icon">{cert.icon}</span>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-summary">
            <h3>Areas of Expertise</h3>
            <div className="expertise-tags">
              <span className="expertise-tag">Digital Transformation</span>
              <span className="expertise-tag">Cross-functional Team Leadership</span>
              <span className="expertise-tag">Budget Management ($1M+)</span>
              <span className="expertise-tag">Stakeholder Communication</span>
              <span className="expertise-tag">Risk Mitigation</span>
              <span className="expertise-tag">Process Optimization</span>
              <span className="expertise-tag">Change Management</span>
              <span className="expertise-tag">Quality Assurance</span>
              <span className="expertise-tag">Vendor Management</span>
              <span className="expertise-tag">Performance Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 
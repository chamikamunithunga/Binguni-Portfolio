import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      category: "digital",
      duration: "18 months",
      budget: "$1.2M",
      team: "22 members",
      description: "Led complete digital transformation of legacy e-commerce platform for major retail client, resulting in 250% increase in online sales.",
      technologies: ["React", "Node.js", "AWS", "Microservices"],
      outcomes: [
        "250% increase in online sales",
        "40% reduction in page load times",
        "99.9% uptime achievement",
        "3-month early delivery"
      ],
      challenges: "Legacy system integration, tight timeline, complex stakeholder management",
      image: "project1.jpg"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "healthcare",
      duration: "12 months",
      budget: "$800K",
      team: "15 members",
      description: "Managed development of comprehensive patient management system for regional hospital network, improving patient care efficiency by 60%.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "HIPAA Compliance"],
      outcomes: [
        "60% improvement in patient processing",
        "95% user adoption rate",
        "Zero security incidents",
        "ROI achieved in 8 months"
      ],
      challenges: "HIPAA compliance, data migration, user training across multiple locations",
      image: "project2.jpg"
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      category: "fintech",
      duration: "8 months",
      budget: "$450K",
      team: "12 members",
      description: "Delivered real-time financial analytics platform for investment firm, enabling data-driven decision making and regulatory compliance.",
      technologies: ["Angular", "C#", "Azure", "Power BI"],
      outcomes: [
        "Real-time data processing",
        "100% regulatory compliance",
        "50% faster reporting",
        "High client satisfaction (9.5/10)"
      ],
      challenges: "Real-time data requirements, regulatory constraints, complex calculations",
      image: "project3.jpg"
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      category: "logistics",
      duration: "14 months",
      budget: "$950K",
      team: "18 members",
      description: "Orchestrated supply chain digitization project resulting in 30% cost reduction and improved visibility across global operations.",
      technologies: ["SAP", "IoT Sensors", "Machine Learning", "Blockchain"],
      outcomes: [
        "30% cost reduction",
        "Real-time tracking implementation",
        "Automated inventory management",
        "Global rollout success"
      ],
      challenges: "Multi-country coordination, legacy system integration, change management",
      image: "project4.jpg"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'digital', label: 'Digital Transformation' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'logistics', label: 'Logistics' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Showcasing successful project deliveries and measurable outcomes</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project Image</span>
                </div>
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="duration">⏱️ {project.duration}</span>
                    <span className="budget">💰 {project.budget}</span>
                    <span className="team">👥 {project.team}</span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-outcomes">
                  <h4>Key Outcomes:</h4>
                  <ul>
                    {project.outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-challenges">
                  <h4>Challenges Overcome:</h4>
                  <p>{project.challenges}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
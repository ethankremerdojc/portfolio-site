import { useState } from 'react'

import Card from "@/components/Card/Card";
import TextIcon from "@/components/TextIcon/TextIcon"
import Button from "@/components/Button/Button"

export default function Home({}) {

  const [projectsOpen, setProjectsOpen] = useState({
    walt: false,
    hexgame: false
  });

  function toggleProjectOpen(project) {
    let newProjectsOpen = {...projectsOpen};
    newProjectsOpen[project] = !projectsOpen[project];
    setProjectsOpen(newProjectsOpen);
  }

  return (<div className="homepage">
    <section id="hero-section">
      <Card className="hero-card" spacing="xl">
        <div className="hero-text">
          <h1>Hi, I'm</h1>
          <h1 className="glowing-text">Ethan</h1>
        </div>

        <p className="hero-body">
          Full Stack Developer & Systems Builder with over 5 years of
          experience engineering reliable web architectures, high-
          performance backends in Python & Django, and delight-
          inducing interactive systems.
        </p>

        <hr />

        <div className="hero-info-cards">
          <div className="info-card info-card-experience">
            <h3>Experience</h3>
            <h2>5+ Years</h2>
            <p>Active Production</p>
          </div>

          <div className="info-card info-card-primary">
            <h3>Preferred Stack</h3>
            <h2>Python</h2>
            <p>Django, React, ...</p>
          </div>

          <div className="info-card info-card-stack">
            <h3>Stack</h3>
            <h2>Full Stack</h2>
            <p>Docker, TS, Linux</p>
          </div>
        </div>

        <div className="hero-ctas">
        </div>

      </Card>

      <Card className="about-me-card" spacing="xl">
        <div className="about-me-title">
          <h2>About me</h2>
          <h3>Medicine Hat, AB // Remote</h3>
        </div>

        <hr />

        <div className="about-me-body">
          <p>Hello world! I'm Ethan Kremer.</p>
          <p>
          I am a software developer with over five
          years of experience building reliable web
          applications and backend systems. My
          primary experience is in Python, particularly
          with Django, though I am comfortable
          working across the stack from server
          configuration to systems building, from
          structuring applications to improving
          performance and development workflows.
          </p>
          <p>
          I am passionate about creating well-
          designed, maintainable software that solves
          real problems, but I also love building fun and
          'useless' things that make people smile and
          laugh.
          </p>
        </div>
        <Button
          href="#contact"
          className="about-me-contact-button"
        >
          Contact Me
        </Button>
      </Card>
    </section>

    <section id="stack">

      <h1>Current Technologies</h1>

      <div className="stack-grid">
        <Card className="stack-item">
          <TextIcon
            className="stack-item-icon"
            text="PY"
          />
          <div className="stack-item-title">Python</div>
        </Card>
        <Card className="stack-item">
          <div className="stack-item-icon">ICON</div>
          <div className="stack-item-title">Python</div>
        </Card>
        <Card className="stack-item">
          <div className="stack-item-icon">ICON</div>
          <div className="stack-item-title">Python</div>
        </Card>
        <Card className="stack-item">
          <div className="stack-item-icon">ICON</div>
          <div className="stack-item-title">Python</div>
        </Card>

        <Card className="stack-item">
          <div className="stack-item-icon">ICON</div>
          <div className="stack-item-title">Python</div>
        </Card>
        <Card className="stack-item">
          <div className="stack-item-icon">ICON</div>
          <div className="stack-item-title">Python</div>
        </Card>
        <Card className="stack-item">
          <div className="stack-item-icon">ICON</div>
          <div className="stack-item-title">Python</div>
        </Card>
        <Card className="stack-item">
          <div className="stack-item-icon">ICON</div>
          <div className="stack-item-title">Python</div>
        </Card>
      </div>
    </section>

    <section id="work-and-education">
      <h1>Work</h1>
      <Card className="work-card">
        <div className="work-experience-block">
          <img
            className="work-experience-block-img"
            src="/decker-logo.png" 
          />

          <div className="work-experience-block-content">
              <div className="employer-info">
                <h3>Sep 2021 - now</h3>
                <h2>Decker Medicine</h2>
                <h4>Senior Software Developer</h4>
              </div>

              <ul>
                <li>AI Tools: Designed custom content generating AI tools to streamline author content creation processes</li>
                <li>WebApp Optimization: Rebuilt over 50% of customer facing pages to be up to 7x faster page load times, and an over 300% reduction in bugs.</li>
                <li>Stack And Server Upgrade: Executed a full-stack modernization project, upgrading the platform from Python 3.5 to Python 3.13, refactoring over 100 pages, and overhauling development and production server infrastructure to support future growth and maintainability.</li>
                <li>Cloud Cost Reductions: Reduced AWS database infrastructure costs by approximately 60% through RDS optimization </li>
            </ul>
          </div>
        </div>

        <div className="work-experience-block">
          <img
            className="work-experience-block-img"
            src="/squarebit-logo.png"
          />

          <div className="work-experience-block-content">
              <div className="employer-info">
                <h3>Jan 2021 - Dec 2021</h3>
                <h2>Squarebit Safety</h2>
                <h4>Software Developer</h4>
              </div>

              <ul>
                <li>WebApp: Designed and developed a full-stack safety application from the ground up, supporting workflows for the trades industry</li>
                <li>Backend: Built and maintained the backend using Django, including custom user models and dynamic form systems allowing users to fill out safety paperwork online.</li>
                <li>PWA: Delivered the application as a Progressive Web App (PWA), enabling app-like functionality on mobile devices.</li>
              </ul>
          </div>
        </div>

        <div className="work-experience-block">
          <img
            className="work-experience-block-img"
            src="/port80-logo.png"
          />

          <div className="work-experience-block-content">
              <div className="employer-info">
                <h3>Apr 2020 - Jan 2021</h3>
                <h2>Port 80 Web Design</h2>
                <h4>Web Developer - Client Support</h4>
              </div>

              <ul>
                <li>E-Commerce: Developed and maintained Shopify storefronts as part of a distributed team across Canada, supporting a range of e-commerce clients</li>
                <li>API: Worked with the Shopify API and third-party applications to extend platform capabilities and implement custom features</li>
                <li>Quality Assurance: Managed product catalogs, customer data, and store configurations, ensuring accuracy and consistency across environments</li>
              </ul>
          </div>
        </div>
      </Card>
    </section>

    <section id="projects">
      <h1>Featured Projects</h1>
      <div className="projects-cards">
        <Card className="project-card">
          <img
            className="project-img"
            src="/hexgame-screenshot.png"
          />
          <div className="project-info">
            <h3>
              HexGame | Custom 4X online board game
            </h3>
            <Button onClick={() => toggleProjectOpen("hexgame")}>
              Details...
            </Button>
          </div>
        </Card>
        <Card className="project-card">
          <img
            className="project-img"
            src="/walt-screenshot.png"
          />
          <div className="project-info">
            <h3>
              Walt Connelly's professional Portfolio Page
            </h3>
            <Button onClick={() => toggleProjectOpen("walt")}>
              Details...
            </Button>

            <div
              className="project-details"
              style={projectsOpen.walt === false ? {display: "none"} : {}}
            >
              walt details
            </div>
          </div>
        </Card>
      </div>
    </section>

    <section id="connect">
      <div className="connect-cards">
        <Card className="connect-card">
          Connect with ethan
        </Card>
        <Card className="connect-card">
          Send a message
        </Card>
      </div>
    </section>
  </div>)
}

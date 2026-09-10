import { useState } from 'react'
import './App.css'

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";

function App() {

  return (
    <app className="dot-matrix-bg">

      <Header />

      <div className="app-body">
        <section id="hero-section">
          <Card className="hero-card">
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

          <Card className="hero-card">
            <div className="hero-text">
              <h1>Hi, I'm</h1>
              <h1 className="glowing-text">Ethan</h1>
            </div>

            <p className="hero-body">
              Full Stack Developer & Systems Builder with over 6 years of
              experience engineering reliable web architectures, high-
              performance backends in Python & Django, and delight-
              inducing interactive systems.
            </p>

            <hr />

            <div className="hero-info-cards">
              <div className="info-card info-card-experience">
                <h3>Experience</h3>
                <h2>6+ Years</h2>
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

        <section id="stack">
          <h1>Current Technologies</h1>
          <div className="stack-grid">
            <p>Stack grid here</p>
          </div>
        </section>

        <section id="projects">
          <h1>Featured Projects</h1>
          <div className="projects-cards">
            <Card className="project-card">
              Chess Speedrunning
            </Card>
            <Card className="project-card">
              Hexgame
            </Card>
          </div>

        </section>
      </div>

      <Footer />

    </app>
  )
}

export default App

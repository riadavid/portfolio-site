import React, { useState } from "react";
import "./index.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#hero">Ria David</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#tech">Tech</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="hero" className="hero section">
      <div className="hero-left">
        <p className="eyebrow">UX • UI • Product • Frontend</p>
        <h1>
          Hi - I'm <span className="name">Ria David</span>
        </h1>
        <p className="lead">
          UX/UI Designer & Software Developer focused on clear interfaces and
          delightful experiences. Final year CS student - building usable tools
          and thoughtful products.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn ghost" href="#contact">Get in touch</a>
        </div>

        <ul className="micro">
          <li><strong>Role:</strong> UX / UI Designer</li>
          <li><strong>Also:</strong> DevOps enthusiast & React dev</li>
        </ul>
      </div>

      <div className="hero-right" aria-hidden>
        <div className="mockup">
          <div className="mockup-header" />
          <div className="mockup-content">
            <div className="mock-line short" />
            <div className="mock-line long" />
            <div className="mock-line medium" />
            <div className="mock-grid">
              <div className="tile" />
              <div className="tile" />
              <div className="tile" />
              <div className="tile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="section glass">
      <div className="about-grid">
        <div>
          <h2>About</h2>
          <p>
            I design and build interfaces that are simple, accessible and
            delightful. I combine research-led UX thinking with clean visual
            systems and practical front-end development to ship intuitive
            products.
          </p>
          <p>
            Currently polishing skills in DSA, system design, and DevOps
            workflows while crafting thoughtful interfaces for small teams.
          </p>
          <div className="skills-inline">
            <span className="chip">User Flows</span>
            <span className="chip">Prototyping</span>
            <span className="chip">React</span>
            <span className="chip">Streamlit</span>
          </div>
        </div>

        <aside className="about-aside" aria-hidden>
          <div className="stat">
            <div className="stat-num">26+</div>
            <div className="stat-label">Trainers tracked (project)</div>
          </div>

          <div className="stat">
            <div className="stat-num">3</div>
            <div className="stat-label">Major projects shipped</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Tech() {
  const tech = [
    "Python", "C++", "Java", "React", "Streamlit",
    "Docker", "Git", "GitHub Actions", "Firebase"
  ];
  return (
    <section id="tech" className="section">
      <h2>Tech Stack</h2>
      <p className="muted">Tools & languages I use to craft experiences and ship products.</p>
      <ul className="tech-list">
        {tech.map((t) => <li key={t} className="tech-item">{t}</li>)}
      </ul>
    </section>
  );
}

function Projects() {
  const [expanded, setExpanded] = useState(null);

  const data = [
    { id: 1, title: "Visitor Management System", tech: "Streamlit • Python", desc: "A clean visitor onboarding dashboard with role-based views, analytics and export capabilities." },
    { id: 2, title: "Trainer Locator App", tech: "Streamlit • Realtime DB", desc: "Real-time location tracking for trainers across India with visual maps and clustering." },
    { id: 3, title: "Portfolio Site (this)", tech: "React • CSS", desc: "Sleek minimal portfolio showcasing projects, with accessible components and smooth motion." }
  ];

  return (
    <section id="projects" className="section glass">
      <h2>Projects</h2>
      <div className="projects-grid" role="list">
        {data.map(p => (
          <article
            key={p.id}
            role="listitem"
            className={`project-card ${expanded === p.id ? "expanded" : ""}`}
            onMouseEnter={() => setExpanded(p.id)}
            onMouseLeave={() => setExpanded(null)}
            onFocus={() => setExpanded(p.id)}
            onBlur={() => setExpanded(null)}
            tabIndex={0}
            aria-expanded={expanded === p.id}
          >
            <div className="project-head">
              <div className="project-title">{p.title}</div>
              <div className="project-tech">{p.tech}</div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-actions">
              <a className="small-btn" href="#" onClick={e => e.preventDefault()}>Case study</a>
              <a className="small-btn ghost" href="#" onClick={e => e.preventDefault()}>Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "riadavid.29@gmail.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="muted">Open to collaboration, internships, and UX / frontend roles.</p>
      <div className="contact-row">
        <div className="contact-card glass">
          <h3>Email</h3>
          <div className="contact-line">
            <code className="contact-email">{email}</code>
            <button className="icon-btn" onClick={copyEmail}>
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
          <div className="contact-links">
            <a className="small-btn" href="mailto:riadavid.29@gmail.com">Email</a>
            <a className="small-btn ghost" href="https://github.com/riadavid" target="_blank" rel="noreferrer">GitHub</a>
            <a className="small-btn ghost" href="https://www.linkedin.com/in/ria-david-126333254" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Ria David — UX & UI Designer</div>
        <div className="footer-links">
          <a href="#hero">Top</a>
          <a href="#projects">Projects</a>
        </div>
      </footer>
    </div>
  );
}

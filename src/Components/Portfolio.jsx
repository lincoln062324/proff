import { useState, useEffect, useRef } from "react";
import "../App.css";
import { useTypewriter } from "./useTypewriter";
import { projects, skills, roles, aboutMeta, socials } from "./portfolio.data";
import profilePhoto from "../assets/2x2.jpg";

// ── Animate-on-scroll hook ────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Portfolio() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { displayed } = useTypewriter("Christian");

  // ── Active section via IntersectionObserver ───────────
  useEffect(() => {
    const sections = ["home", "about", "roles", "skills"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Close drawer on Escape ────────────────────────────
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // reveal refs
  const aboutRef   = useReveal();
  const rolesRef   = useReveal();
  const skillsRef  = useReveal();

  return (
    <>
      {/* ── Header ───────────────────────────────────────── */}
      <header className="header">
        <button className="header-logo" onClick={() => scrollTo("home")}>CR</button>
        <nav className="header-nav">
          {["home", "about", "roles", "skills"].map((section) => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? "active" : ""}`}
              onClick={() => scrollTo(section)}
            >
              {section}
            </button>
          ))}
          <button className="projects-btn" onClick={() => setDrawerOpen(true)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            Projects
          </button>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow animate-hero-1">Hi, my name is</p>
            <h1 className="hero-name animate-hero-2">
              {displayed}
              <span className="cursor" />
            </h1>
            <p className="hero-tagline animate-hero-3">
              Fourth-year BSIT student building useful software and exploring
              human–computer interaction.
            </p>
            <div className="hero-cta animate-hero-4">
              <button className="btn-primary" onClick={() => setDrawerOpen(true)}>
                View Projects
              </button>
              <button className="btn-ghost" onClick={() => scrollTo("about")}>
                About Me
              </button>
            </div>
          </div>

          {/* ── Profile container ── */}
          <div className="hero-photo-wrap animate-hero-2">
            <div className="hero-photo">
              <img src={profilePhoto} alt="Christian Mamaril" className="hero-photo-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" ref={aboutRef} className="reveal-section">
        <p className="section-label">Background</p>
        <h2 className="section-title">About Me</h2>
        <div className="divider" />
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Fourth-year BSIT student passionate about building
              software that solves real campus problems. I enjoy working across
              the full stack — from designing database schemas to crafting clean
              user interfaces.
            </p>
            <p>
              Outside of class, I explore more about my capabilities of what else
              i can build and contribute to gain experience of different projects.
            </p>
            <p>
              I'm always looking for every opportunities where it challenge my
              capabilities and learn new things.
            </p>
          </div>
          <div className="about-meta">
            {aboutMeta.map((item, i) => (
              <div className="meta-item stagger-child" key={item.label} style={{ "--stagger": i }}>
                <span className="meta-label">{item.label}</span>
                <span className="meta-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roles ────────────────────────────────────────── */}
      <section id="roles" ref={rolesRef} className="reveal-section">
        <p className="section-label">What I Do</p>
        <h2 className="section-title">Common Roles</h2>
        <div className="divider" />
        <div className="roles-grid">
          {roles.map((role, i) => (
            <div className="role-card stagger-child" key={role.label} style={{ "--stagger": i }}>
              <p className="role-title">{role.label}</p>
              <p className="role-desc">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section id="skills" ref={skillsRef} className="reveal-section">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">Skills & Tools</h2>
        <div className="divider" />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div className="skill-block stagger-child" key={group.category} style={{ "--stagger": i }}>
              <p className="skill-category">{group.category}</p>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer>
        <p className="footer-copy">
          © 2026 <span>Christian Mamaril</span> · Built with React
        </p>
        <p className="footer-copy">
          <span> Contact: </span> 09859175171
        </p>
        <p className="footer-copy">
          <span>Gmail: </span> ChristianMamaril003@gmail.com
        </p>
        <div className="socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="social-link"
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </footer>

      {/* ── Drawer Overlay ───────────────────────────────── */}
      <div
        className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ── Projects Drawer ──────────────────────────────── */}
      <aside className={`drawer ${drawerOpen ? "open" : ""}`} aria-label="Projects">
        <div className="drawer-header">
          <div>
            <p className="drawer-title">Implemented Systems</p>
            <p className="drawer-count">{projects.length} projects</p>
          </div>
          <button
            className="close-btn"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close drawer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          {projects.map((project, i) => (
            <a
              key={project.id}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              style={{ "--card-index": i }}
            >
              <div className="project-header">
                <p className="project-title">{project.title}</p>
                <span className={`project-status ${project.status === "Completed" ? "status-completed" : "status-progress"}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
                <span className="project-visit">
                  Visit
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
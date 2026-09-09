import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Ritik Kumar Das",
  title: "Software Developer",
  location: "Bhubaneswar, Odisha",
  email: "ritikdas378@gmail.com",
  phone: "+91 9861552046",
  github: "https://github.com/ritik181006lin",
  linkedin: "https://www.linkedin.com/in/ritik-das-81b612320/",
  leetcode: "https://leetcode.com/u/ritikkumardas/",
};

const skills = [
  {
    title: "Languages",
    icon: "bi-code-slash",
    items: ["C", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: "bi-globe2",
    items: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "bi-database",
    items: ["MySQL", "MongoDB", "SQL", "NoSQL"],
  },
  {
    title: "Tools",
    icon: "bi-tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Core Concepts",
    icon: "bi-cpu",
    items: ["DSA", "Algorithms", "OOP", "DBMS", "SDLC"],
  },
  {
    title: "Other",
    icon: "bi-stars",
    items: ["Machine Learning", "Problem Solving", "AI"],
  },
];

const projects = [
  {
    number: "01",
    title: "DevTrack-AI",
    description:
      "An AI-focused developer platform project designed to showcase intelligent development workflows and modern web technologies.",
    tags: ["React.js", "Node.js", "AI", "JavaScript"],
    icon: "bi-robot",
    featured: true,
  },
  {
    number: "02",
    title: "SigmaGPT",
    description:
      "AI chatbot application using external APIs to provide context-aware and dynamic responses through a responsive interface.",
    tags: ["React.js", "API", "JavaScript", "AI"],
    icon: "bi-chat-dots",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    description:
      "Responsive personal portfolio website built to showcase projects, technical skills, experience and contact information.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "bi-window-stack",
  },
];

const experience = [
  {
    type: "Experience",
    date: "May 2026 — July 2026",
    title: "Software Development Intern",
    company: "East Coast Railway",
    location: "Bhubaneswar, Odisha",
    description:
      "Collaborated on a Railway Backup Management System. Worked with SQL database structures for server, backup, user and report information. Developed UI components using HTML, CSS and Bootstrap for server instance management, backup scheduling, instant backups and report monitoring.",
    tags: ["HTML", "CSS", "Bootstrap", "SQL"],
  },
  {
    type: "Education",
    date: "2023 — 2027",
    title: "B.Tech — Computer Science & Engineering",
    company: "Trident Academy of Technology",
    location: "Bhubaneswar, Odisha",
    description:
      "Currently pursuing B.Tech in Computer Science and Engineering with a CGPA of 8.51/10.",
    tags: ["CSE", "CGPA 8.51/10"],
  },
];

const roles = [
  "Software Developer",
  "Full-Stack Developer",
  "Problem Solver",
  "AI Enthusiast",
];

function App() {
  const [active, setActive] = useState("home");
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));

          if (displayText.length === currentRole.length) {
            setDeleting(true);
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));

          if (displayText.length === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : displayText.length === currentRole.length ? 1500 : 80
    );

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "experience",
        "skills",
        "contact",
      ];

      const scrollPosition = window.scrollY + 250;

      for (const id of sections) {
        const section = document.getElementById(id);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div className="background-grid"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <button className="logo" onClick={() => scrollTo("home")}>
            <span>&lt;</span>RK<span>/&gt;</span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["home", "about", "projects", "experience", "skills", "contact"].map(
              (item) => (
                <button
                  key={item}
                  className={active === item ? "active" : ""}
                  onClick={() => scrollTo(item)}
                >
                  {item}
                </button>
              )
            )}
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="availability">
              <span></span>
              Available for opportunities
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Ritik
              <span> Kumar Das</span>
            </h1>

            <div className="typing-line">
              <span>{displayText}</span>
              <b>|</b>
            </div>

            <p className="hero-description">
              Computer Science undergraduate passionate about building
              modern web applications, solving problems and exploring AI.
            </p>

            <div className="hero-buttons">
              <button className="primary-button" onClick={() => scrollTo("projects")}>
                View My Work
                <i className="bi bi-arrow-up-right"></i>
              </button>

              <button className="secondary-button" onClick={() => scrollTo("contact")}>
                Let's Connect
              </button>
            </div>

            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href={profile.leetcode} target="_blank" rel="noreferrer">
                <span className="leetcode-icon">LC</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="photo-card">
              <div className="photo-top">
                <span>PROFILE</span>
                <i className="bi bi-three-dots"></i>
              </div>

              <div className="photo-wrapper">
                <img
                  src="/profile.jpeg"
                  alt="Ritik Kumar Das"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("photo-fallback");
                  }}
                />

                <div className="fallback-initials">RK</div>
              </div>

              <div className="photo-bottom">
                <div>
                  <strong>Ritik Das</strong>
                  <span>Developer</span>
                </div>

                <div className="status-dot"></div>
              </div>
            </div>

            <div className="floating-card card-build">
              <i className="bi bi-code-square"></i>
              <div>
                <strong>Build</strong>
                <span>Modern Apps</span>
              </div>
            </div>

            <div className="floating-card card-ai">
              <i className="bi bi-stars"></i>
              <div>
                <strong>AI</strong>
                <span>Explore & Learn</span>
              </div>
            </div>

            <div className="floating-card card-location">
              <i className="bi bi-geo-alt"></i>
              <span>Bhubaneswar</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <span>01</span>
            <div>
              <p>GET TO KNOW ME</p>
              <h2>About Me</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="large-text">
                I’m a Computer Science undergraduate who enjoys turning ideas
                into practical software.
              </p>

              <p>
                I have hands-on experience developing full-stack web
                applications using technologies such as React.js, Node.js,
                Express.js, MongoDB and SQL.
              </p>

              <p>
                I enjoy learning new technologies, solving DSA problems and
                exploring how AI can be integrated into useful applications.
              </p>

              <div className="about-signature">
                <span>Ritik Kumar Das</span>
                <small>B.Tech CSE • 2023–2027</small>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <strong>8.51</strong>
                <span>CGPA</span>
              </div>

              <div className="stat-card">
                <strong>2027</strong>
                <span>Graduation</span>
              </div>

              <div className="stat-card">
                <strong>3+</strong>
                <span>Projects</span>
              </div>

              <div className="stat-card">
                <strong>MERN</strong>
                <span>Stack</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-heading">
            <span>02</span>
            <div>
              <p>SELECTED WORK</p>
              <h2>Projects</h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={
                  project.featured
                    ? "project-card featured"
                    : "project-card"
                }
                key={project.number}
              >
                <div className="project-number">{project.number}</div>

                <div className="project-icon">
                  <i className={`bi ${project.icon}`}></i>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <button className="project-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-heading">
            <span>03</span>
            <div>
              <p>MY JOURNEY</p>
              <h2>Experience & Education</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <span>{item.type}</span>
                    <time>{item.date}</time>
                  </div>

                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>

                  <div className="timeline-location">
                    <i className="bi bi-geo-alt"></i>
                    {item.location}
                  </div>

                  <p>{item.description}</p>

                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <span>04</span>
            <div>
              <p>WHAT I WORK WITH</p>
              <h2>Skills & Tech Stack</h2>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <div className="skill-icon">
                  <i className={`bi ${skill.icon}`}></i>
                </div>

                <h3>{skill.title}</h3>

                <div className="skill-list">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="certifications">
            <div className="cert-card">
              <i className="bi bi-patch-check"></i>
              <div>
                <span>Certification</span>
                <strong>Web Development in MERN Stack</strong>
                <small>Apna College • 2026</small>
              </div>
            </div>

            <div className="cert-card">
              <i className="bi bi-trophy"></i>
              <div>
                <span>Activity</span>
                <strong>Smart India Hackathon</strong>
                <small>Participant</small>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div className="contact-left">
              <span className="contact-label">05 — GET IN TOUCH</span>

              <h2>
                Let's build something
                <span> meaningful.</span>
              </h2>

              <p>
                Whether you have an opportunity, a project idea or simply
                want to connect, feel free to reach out.
              </p>
            </div>

            <div className="contact-right">
              <a href={`mailto:${profile.email}`} className="contact-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <span>Email</span>
                  <strong>{profile.email}</strong>
                </div>
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a href={`tel:${profile.phone}`} className="contact-item">
                <i className="bi bi-telephone"></i>
                <div>
                  <span>Phone</span>
                  <strong>{profile.phone}</strong>
                </div>
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <i className="bi bi-linkedin"></i>
                <div>
                  <span>LinkedIn</span>
                  <strong>Connect with me</strong>
                </div>
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">
          <span className="footer-logo">&lt;RK/&gt;</span>
          <span>Designed & built by Ritik Kumar Das</span>
        </div>

        <div className="footer-right">
          <span>© 2026</span>

          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
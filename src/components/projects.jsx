import React from 'react';

const PROJECTS = [
  {
    name: 'XSL Streamer',
    repo: 'ptalele/xlsstreamer',
    url: 'https://github.com/ptalele/xlsstreamer',
    desc: 'Async reader for large XLS files.',
    watchers: 100,
    stars: 49,
  },
  {
    name: 'JUnit 5 Demo',
    repo: 'ptalele/Junit5Demo',
    url: 'https://github.com/ptalele/Junit5Demo',
    desc: 'The next generation of JUnit. Quality is never an accident.',
    watchers: 98,
    stars: 25,
  },
  {
    name: 'REST API with Python & Flask',
    repo: 'ptalele/PythonWithFlask',
    url: 'https://github.com/ptalele/PythonWithFlask',
    desc: 'Building a REST API with Python and Flask.',
    watchers: 55,
    stars: 12,
  },
  {
    name: 'SpakTrader',
    label: 'Live app',
    url: '/spak',
    external: false,
    live: true,
    desc: 'An interactive trading dashboard built with Streamlit. Launches the live app.',
  },
  {
    name: 'AWS Lambda Implementation',
    repo: 'ptalele/aws-lambda',
    url: 'https://github.com/ptalele/aws-lambda',
    desc: 'Sample use-case implementation for AWS Lambda.',
    watchers: 100,
    stars: 49,
  },
  {
    name: 'Spring Boot Custom Starter',
    repo: 'ptalele/SpringbootCustomStarter',
    url: 'https://github.com/ptalele/SpringbootCustomStarter',
    desc: 'Customizing a Spring Boot starter.',
    watchers: 100,
    stars: 49,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Recent projects</h2>
          <p className="section-intro">
            A selection of open-source work spanning Java, Spring Boot, Python, AWS and testing.
          </p>
        </div>

        <div className="grid grid--3">
          {PROJECTS.map((p, i) => {
            const isExternal = p.external !== false;
            return (
              <a
                className="card project-card reveal"
                key={p.name}
                href={p.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <div className="project-card__top">
                  <span className="project-card__repo">
                    {p.live ? '\u26A1' : '\uD83D\uDCE6'} {p.repo || p.label}
                  </span>
                  <span className="project-card__arrow" aria-hidden="true">
                    {'\u2197'}
                  </span>
                </div>
                <h3 className="card__title">{p.name}</h3>
                <p className="card__body">{p.desc}</p>
                <div className="project-card__stats">
                  {p.live ? (
                    <span aria-label="status">{'\uD83D\uDFE2'} Live</span>
                  ) : (
                    <>
                      <span aria-label="watchers">{'\uD83D\uDC41'} {p.watchers}</span>
                      <span aria-label="stars">{'\u2605'} {p.stars}</span>
                    </>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className="reveal" style={{ marginTop: 32 }}>
          <a
            className="btn btn--ghost"
            href="https://github.com/ptalele"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

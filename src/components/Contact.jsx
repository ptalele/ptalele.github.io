import React from 'react';

const SOCIALS = [
  { label: 'Email', href: 'mailto:prashant.talele@gmail.com', icon: '\u2709' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prashant-talele-1859344', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com/ptalele', icon: '\uD83D\uDC19' },
  { label: 'Medium', href: 'https://prashant-talele.medium.com/', icon: 'M' },
  { label: 'Twitter', href: 'https://twitter.com/ptalele', icon: '\uD835\uDD4F' },
  { label: 'Facebook', href: 'https://www.facebook.com/ptalele2', icon: 'f' },
  { label: 'Instagram', href: 'https://www.instagram.com/ptalele2', icon: '\uD83D\uDCF7' },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div className="reveal">
          <span className="section-label">Get in touch</span>
          <h2 className="contact__title">
            Let&rsquo;s build something that works outside the demo.
          </h2>
          <p className="section-intro" style={{ margin: '0 auto 8px' }}>
            Anyone, anywhere can make a positive difference. Reach out &mdash; I&rsquo;m always
            happy to talk product, engineering and leadership.
          </p>

          <div className="hero__cta" style={{ justifyContent: 'center', marginTop: 28 }}>
            <a className="btn btn--primary" href="mailto:prashant.talele@gmail.com">
              Email me &rarr;
            </a>
          </div>

          <div className="contact__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="social-btn"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

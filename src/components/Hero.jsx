import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="container hero__inner">
        <span className="hero__eyebrow">
          <span className="dot" /> Engineer &middot; Manager &middot; Leader
        </span>

        <h1 className="hero__title">
          Hi, I&rsquo;m Prashant. I turn business goals into
          <span className="grad"> products that scale</span> and deliver measurable impact.
        </h1>

        <p className="hero__subtitle">
          Technology and people leader with 22+ years building banking, financial and identity
          products &mdash; aligning engineering, strategy and delivery to move real business
          outcomes.
        </p>

        <div className="hero__cta">
          <a
            className="btn btn--primary"
            href="images/Prashant_Talele.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile &darr;
          </a>
          <a className="btn btn--ghost" href="#projects">
            Explore Projects
          </a>
        </div>

        <div className="hero__meta">
          <div className="hero__stat">
            <div className="num">22+</div>
            <div className="lbl">Years experience</div>
          </div>
          <div className="hero__stat">
            <div className="num">5</div>
            <div className="lbl">Certifications</div>
          </div>
          <div className="hero__stat">
            <div className="num">&infin;</div>
            <div className="lbl">Things to build</div>
          </div>
        </div>
      </div>
    </section>
  );
}

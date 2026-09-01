import React from 'react';

const SERVICES = [
  {
    icon: '\uD83D\uDCCA',
    title: 'Project Management',
    body:
      'Manage design, development and delivery of financial products, including vendor and resource management. Own software from initial concept to cash through continuous improvement, with strong negotiation, conflict resolution and risk management skills. Certified Project Management Professional.',
  },
  {
    icon: '\uD83D\uDE80',
    title: 'Digital Transformation',
    body:
      'Integrate digital technology across all areas of a business, changing how legacy models operate and deliver value. Identify extreme automation and operational-excellence opportunities to reduce IT cost, and lead transformation to a product-oriented delivery model.',
  },
  {
    icon: '\uD83D\uDCF1',
    title: 'Application Modernization',
    body:
      'Migrate large-scale applications to domain-driven design using microservice architecture, cloud-native principles, Extreme Programming (XP) and Test-Driven Development (TDD). Accountable for the technology vision and roadmap for product capabilities and parity.',
  },
  {
    icon: '\uD83D\uDCA1',
    title: 'Web Development',
    body:
      'Build websites and edge APIs using Python, Java, JavaScript, React and HTML5. Knowledge of micro-frontends, content management, SEO and responsive design, with an understanding of UI/UX standards and compliance regulations.',
  },
  {
    icon: '\uD83D\uDDC2\uFE0F',
    title: 'Full-Stack Development',
    body:
      'Design and deliver products across web, mobile and native stacks. Develop applications on PCF, AWS and OpenShift using Jenkins, Docker and Kubernetes, following 12-factor cloud-native design.',
  },
  {
    icon: '\uD83C\uDF93',
    title: 'Certifications',
    isList: true,
    items: [
      'Certified Project Management Professional',
      'Certified in Extreme Programming Fundamentals',
      'Digital Transformation Specialist &mdash; University of Virginia',
      'Certified Spring Professional Developer',
      'AWS Certified Associate Developer',
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section section--alt">
      <div className="container">
        <div className="reveal">
          <span className="section-label">About &amp; Expertise</span>
          <h2 className="section-title">Who am I, and what I do</h2>
          <p className="section-intro">
            I&rsquo;m an engineer by nature, a manager by role and a leader by qualities. A
            computer graduate from Pune University, I&rsquo;ve spent 22+ years building highly
            scalable banking and financial products &mdash; and I love exploring new
            technologies along the way.
          </p>
        </div>

        <div className="grid grid--3">
          {SERVICES.map((s, i) => (
            <div className="card reveal" key={s.title} style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <div className="card__icon" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="card__title">{s.title}</h3>
              {s.isList ? (
                <div className="card__body">
                  <ul>
                    {s.items.map((item) => (
                      <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="card__body">{s.body}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

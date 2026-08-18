import React from 'react';

const ENTRIES = [
  {
    role: 'Senior Manager, Authentication & Identity Services \u2014 Amazon',
    period: 'Present',
    body:
      'Technology and people leader for Authentication and Identity Services at Amazon. I lead teams building and operating the platforms that power sign-in, registration, account maintenance and verification flows at global scale across marketplaces. Focused on secure, highly available, low-latency identity experiences, I drive architecture and roadmap for authentication services, operational excellence, and resilient multi-region systems, while coaching autonomous engineering teams to deliver customer-obsessed products.',
  },
  {
    role: 'Senior Manager \u2014 Discover',
    period: 'November 2010 \u2013 August 2021',
    body:
      'Technology and people leader at Discover Financial Services. I create sustainable, scalable products that enable value streams to do rapid business feature development, and own software from concept to cash through continuous improvement. Led department transformation to a product-oriented delivery model with a consistent agile approach. Architect and develop the commercial banking flagship product, expanding its scope, scale, performance and reliability. Responsible for family budgets, resources and financials, while building and coaching highly productive autonomous engineering teams. I also explore container technology (Docker) and orchestration (Kubernetes, AWS, OpenShift) to create industry-standard cloud-native products.',
  },
  {
    role: 'Technical Project Manager \u2014 Chicago Mercantile Exchange',
    period: 'May 2010 \u2013 November 2010',
    body:
      "Accountable for delivering on the technology vision and roadmap for CME's product capabilities and parity. Responsible for performance, technical skill enablement, and allocation of team members to best support product engineering teams, ensuring technical solutions adhered to Enterprise Architecture patterns and guardrails.",
  },
  {
    role: 'Lead Consultant \u2014 Capgemini Consulting Services',
    period: 'March 2005 \u2013 May 2010',
    body:
      'Led eBusiness teams delivering HSBC credit-card acquisition products using the Rational Unified Process. Gathered requirements, and owned analysis, design and development of intranet applications. Built interactive GUIs with JSP, XML and XSL, implemented an MVC/Spring presentation framework (IOC, DI, AOP), and applied J2EE patterns such as Front Controller, Session Fa\u00e7ade, DAO, Business Delegate and View Helper. Handled performance analysis (JProfiler, WAS profiling), asynchronous email notifications, JUnit testing integrated with Maven, reusable batch components, PMD/FindBugs/Checkstyle configuration, reusable SSO authentication (LDAP/DB/XML), and ISO 9001 audit preparation.',
  },
  {
    role: 'Software Analyst \u2014 Arus Inc.',
    period: 'June 2004 \u2013 March 2005',
    body:
      'Web programmer developing a merchant loyalty feature and a payment-gateway interface for credit, void and return card payments. Built CI/CD pipelines for build and deployment to the application server, analyzed production incidents and provided resolutions, and ran program-increment planning workshops with business stakeholders.',
  },
  {
    role: 'B.E. Information Technology \u2014 Pune University, India',
    period: 'Sept 2000 \u2013 May 2004',
    body:
      'Graduated with honors in Information Technology, gaining thorough knowledge of object-oriented programming, data structures and algorithms, distributed networking, relational databases and software engineering methodologies.',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Highlights</span>
          <h2 className="section-title">Career journey</h2>
          <p className="section-intro">
            Two decades across banking, exchanges and consulting &mdash; building products and
            leading the teams behind them.
          </p>
        </div>

        <div className="timeline">
          {ENTRIES.map((entry) => (
            <div className="tl-item reveal" key={entry.role}>
              <div className="tl-item__period">{entry.period}</div>
              <h3 className="tl-item__role">{entry.role}</h3>
              <p className="tl-item__body">{entry.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

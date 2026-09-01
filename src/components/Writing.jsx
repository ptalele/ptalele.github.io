import React from 'react';

const POSTS = [
  {
    title: 'Agentic AI Workflows: Beyond Simple Chatbots',
    url: 'blogs/agentic-ai-workflows.html',
    date: 'Jun 12, 2025',
    tag: 'AI',
    excerpt: 'The next frontier is autonomous agents that plan, execute, and iterate on complex tasks with minimal human supervision.',
  },
  {
    title: 'Algorithmic Trading Fundamentals for Engineers',
    url: 'blogs/algorithmic-trading-fundamentals.html',
    date: 'May 28, 2025',
    tag: 'Trading',
    excerpt: 'Core building blocks every engineer needs to understand before writing strategy code.',
  },
  {
    title: 'LLM-Powered Code Generation: Practical Patterns',
    url: 'blogs/llm-powered-code-generation.html',
    date: 'May 5, 2025',
    tag: 'AI',
    excerpt: 'Getting consistent, production-quality code from an LLM requires patterns, guardrails, and feedback loops.',
  },
  {
    title: 'Building Trading Bots with Python and Real-Time Data',
    url: 'blogs/building-trading-bots-python.html',
    date: 'Apr 15, 2025',
    tag: 'Trading',
    excerpt: 'Architecture decisions and key libraries for a production-ready Python trading bot.',
  },
  {
    title: 'RAG vs. Fine-Tuning: Choosing the Right AI Approach',
    url: 'blogs/rag-vs-fine-tuning.html',
    date: 'Mar 22, 2025',
    tag: 'AI',
    excerpt: 'Each approach has distinct trade-offs. Picking the wrong one wastes engineering time and budget.',
  },
  {
    title: 'Multi-Agent Systems in Production: Lessons Learned',
    url: 'blogs/multi-agent-systems-production.html',
    date: 'Mar 3, 2025',
    tag: 'Agentic',
    excerpt: 'Specialized agents that collaborate, delegate, and check each other\u2019s work — and the challenges that come with them.',
  },
  {
    title: 'Event-Driven Architecture for Fintech at Scale',
    url: 'blogs/event-driven-architecture-fintech.html',
    date: 'Feb 10, 2025',
    tag: 'Architecture',
    excerpt: 'Real-time processing, strict ordering, and bulletproof audit trails at financial scale.',
  },
  {
    title: 'Zero Trust Identity Systems: Designing for the Hostile Internet',
    url: 'blogs/zero-trust-identity-systems.html',
    date: 'Jan 18, 2025',
    tag: 'Security',
    excerpt: 'Modern identity must assume every request is hostile, regardless of origin. Here\u2019s how to build for it.',
  },
  {
    title: 'Vector Databases Explained: The Backbone of Modern AI Search',
    url: 'blogs/vector-databases-explained.html',
    date: 'Dec 29, 2024',
    tag: 'AI',
    excerpt: 'How ANN algorithms, embedding models, and hybrid search power every RAG pipeline and recommendation engine.',
  },
  {
    title: 'ML Models for Market Prediction: What Works (and What Doesn\u2019t)',
    url: 'blogs/ml-models-for-market-prediction.html',
    date: 'Dec 5, 2024',
    tag: 'Trading / ML',
    excerpt: 'A practitioner\u2019s guide to what actually moves the needle in financial ML.',
  },
  {
    title: 'Kubernetes Autoscaling Patterns for High-Traffic Services',
    url: 'blogs/kubernetes-autoscaling-patterns.html',
    date: 'Nov 12, 2024',
    tag: 'DevOps',
    excerpt: 'Getting autoscaling right on K8s requires understanding the different scaling dimensions and when each applies.',
  },
  {
    title: 'Microservice Driven Architecture',
    url:
      'https://prashant-talele.medium.com/microservices-driven-architecture-d7e088df1727',
    img: 'images/microservice.jpg',
    date: 'Feb 21, 2020',
    tag: 'Architecture',
    excerpt: 'A practical look at designing systems around microservice-driven architecture.',
  },
  {
    title: 'Blogging in Markdown with GitHub & Jekyll',
    url:
      'https://prashant-talele.medium.com/jekyll-to-transform-simple-text-to-static-website-e2f3d6b17d88',
    img: 'images/blog-1.jpg',
    date: 'Apr 14, 2018',
    tag: 'Tooling',
    excerpt: 'A step-by-step guide to blogging in markdown using GitHub and Jekyll.',
  },
  {
    title: 'Effective Pair Programming Techniques',
    url:
      'https://prashant-talele.medium.com/effective-pair-programming-techniques-63904e4fa9e8',
    img: 'images/pairprogramming.jpg',
    date: 'Sep 24, 2018',
    tag: 'Practices',
    excerpt: 'Techniques that make pair programming genuinely effective for teams.',
  },
  {
    title: 'JavaScript Async and Await in Loops',
    url:
      'https://medium.com/@prashant.talele/javascript-async-and-await-in-loops-3ae84973af30',
    img: 'images/blog-3.jpg',
    date: 'Jan 11, 2019',
    tag: 'JavaScript',
    excerpt: 'Async and await functions inside loops, and the key takeaways to remember.',
  },
];

export default function Writing() {
  return (
    <section id="blogs" className="section section--alt">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Read</span>
          <h2 className="section-title">Blogs</h2>
          <p className="section-intro">
            I reflect ideas and thoughts through code and writing. Articles on AI, algorithmic
            trading, agentic systems, architecture, and engineering practices.
          </p>
        </div>

        <div className="grid grid--3">
          {POSTS.map((post, i) => {
            const isExternal = post.url.startsWith('http');
            return (
              <a
                className="card post-card reveal"
                key={post.url}
                href={post.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                {post.img && (
                  <div className="post-card__img">
                    <img src={post.img} alt={post.title} loading="lazy" />
                  </div>
                )}
                <div className="post-card__body">
                  <div className="post-card__meta">
                    {post.date} &middot; {post.tag}
                  </div>
                  <h3 className="post-card__title">{post.title}</h3>
                  <p className="post-card__excerpt">{post.excerpt}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="reveal" style={{ marginTop: 32 }}>
          <a
            className="btn btn--ghost"
            href="https://prashant-talele.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more on Medium &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

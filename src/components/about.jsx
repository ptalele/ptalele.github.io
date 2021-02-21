import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Principal Engineer with 15 years experience of developing highly scalable Banking and financial products, computer grad from Pune University with IT as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)</p>
                    <p>I have started reflecting my ideas and thoughts through the medium of code (That's the language developers from all over the world understand :P ).</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and API using Python, Java, JavaScript,React,HTML 5.
                       Knowledge of Micro frontend, Content management, Search engine optimization, Responsive design.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Application Modernization</h3>
                    <p>I have experience of migrating large scale applications to Miro-service architecture, cloud native architecture design using
                        extreme Programming(XP) and Test driven development(TDD)</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Full Stack developer</h3>
                    <p>Lead Principal Engineer of Web Platform team at Discover Financial Services.
                    Developing applications on PCF, AWS and Open shift platform using Jenkins, Docker, K8s.
                    Experience of 12 factor cloud-native design.
                    </p>
                </div>
                </div>
            </div>

                {/*<div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>*/}
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-chart-pie" />
                </span>
                <div className="desc">
                    <h3>Project Management</h3>
                    <p>Manage design, development and delivery of 6 platform products.
                    Experience of vendor and resource management.
                    Excellent negotiation, conflict resolutions and Risk management skills.
                        Certified Project management professional.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Certifications</h3>
                    <p> Certified Project management professional.
                        Certified Spring professional developer.
                        Certified Web Component Developer.
                        AWS Certified Associate Developer.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}

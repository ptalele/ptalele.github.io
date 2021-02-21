	import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ptalele/xlsstreamer">XSL Streamer</a></h3>
											<span>Async reader for large Xsl files</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="https://github.com/ptalele/xlsstreamer/watchers"><i className="icon-eye" /> 100</a></span>
												<span><a href="https://github.com/ptalele/xlsstreamer/stargazers"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ptalele/Junit5Demo">Junit5 - next generation of JUnit</a></h3>
											<span>“Quality is never an accident; it is always the result of intelligent effort.”</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="https://github.com/ptalele/Junit5Demo/watchers"><i className="icon-eye" /> 98</a></span>
												<span><a href="https://github.com/ptalele/Junit5Demo/stargazers"><i className="icon-heart" /> 25</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ptalele/PythonWithFlask">Rest API with python and Flask</a></h3>
											<span>Rest API with Python</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="https://github.com/ptalele/PythonWithFlask/watchers"><i className="icon-eye" /> 55</a></span>
												<span><a href="https://github.com/ptalele/PythonWithFlask/stargazers"><i className="icon-heart" /> 12</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ptalele/AngularWithBoot">Spring Boot - Angular Integration</a></h3>
											<span>Demonstrates how to integrate Angular in Spring Boot using Gradle.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="https://github.com/ptalele/AngularWithBoot/watchers"><i className="icon-eye" /> 76</a></span>
												<span><a href="https://github.com/ptalele/AngularWithBoot/stargazers"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ptalele/aws-lambda">AWS Lambda Implementation</a></h3>
											<span>Sample use case implementation for AWS Lambda</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="https://github.com/ptalele/aws-lambda/watchers"><i className="icon-eye" /> 100</a></span>
												<span><a href="https://github.com/ptalele/aws-lambda/stargazers"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ptalele/SpringbootCustomStarter">Spring boot Custom starter</a></h3>
											<span>Customize spring boot starter </span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="https://github.com/ptalele/SpringbootCustomStarter/watchers"><i className="icon-eye" /> 100</a></span>
												<span><a href="https://github.com/ptalele/SpringbootCustomStarter/stargazers"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}

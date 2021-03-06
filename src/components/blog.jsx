import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
				<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://prashant-talele.medium.com/microservices-driven-architecture-d7e088df1727" className="blog-img"><img src="images/microservice.jpg" className="img-responsive" alt="Microservice Driven Architecture" /></a>
						<div className="desc">
							<span><small>Feb 21, 2020 </small> | <small> Microservice Driven Architecture</small> | <small> <i className="icon-bubble3" />1</small></span>
							<h3><a href="https://prashant-talele.medium.com/microservices-driven-architecture-d7e088df1727">Microservice Driven Architecture</a></h3>
							<p>Microservice Driven Architecture</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://prashant-talele.medium.com/jekyll-to-transform-simple-text-to-static-website-e2f3d6b17d88" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="Blog in Github and Jekyll" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> How to blog in markdown using Github and Jekyll ?</small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://prashant-talele.medium.com/jekyll-to-transform-simple-text-to-static-website-e2f3d6b17d88">How to blog in markdown using Github and Jekyll?</a></h3>
							<p>Step by step guide for blog in markdown using Github and Jekyll.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://prashant-talele.medium.com/effective-pair-programming-techniques-63904e4fa9e8" className="blog-img"><img src="images/pairprogramming.jpg" className="img-responsive" alt="Effective Pair Programming Techniques" /></a>
						<div className="desc">
							<span><small>Sept 24, 2018 </small> | <small> Effective Pair Programming Techniques </small> | <small> <i className="icon-bubble3" /> 2</small></span>
							<h3><a href="https://prashant-talele.medium.com/effective-pair-programming-techniques-63904e4fa9e8">Effective Pair Programming Techniques</a></h3>
							<p>Effective Pair Programming Techniques.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/@prashant.talele/javascript-async-and-await-in-loops-3ae84973af30" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="Javascript Async and Await" /></a>
						<div className="desc">
							<span><small>Jan 11, 2019 </small> | <small> JavaScript </small> | <small> <i className="icon-bubble3" /> 5</small></span>
							<h3><a href="https://medium.com/@prashant.talele/javascript-async-and-await-in-loops-3ae84973af30">Javascript Async and Await</a></h3>
							<p>Javascript Async and await functions in loop and key takeaways.</p>
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

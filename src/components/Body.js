import React from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
	<section className="intro-section">
		<div className="container" >
			<div className="row">
				<div className="col-lg-6 col-xl-6">
					<div className="intro-text-box text-box text-white">
						<div className="top-meta">11.11.18  /  in <Link to="/">Events</Link></div>
						<h3>Event/Activities</h3>

						<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
							  <div className="carousel-item active">
								<img className="d-block w-100" src="img/feast1.jpg" alt="First slide" />
							  </div>
							  <div className="carousel-item">
								<img className="d-block w-100" src="img/feast2.jpg" alt="Second slide" />
							  </div>
							  <div className="carousel-item">
								<img className="d-block w-100" src="img/feast5.jpg" alt="Third slide" />
							  </div>
							  <div className="carousel-item">
								<img className="d-block w-100" src="img/feast8.jpg" alt="Third slide" />
							  </div>
							  <div className="carousel-item">
								<img className="d-block w-100" src="img/feast4.jpg" alt="Third slide" />
							  </div>
							</div>
							<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
							  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
							  <span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
							  <span className="carousel-control-next-icon" aria-hidden="true"></span>
							  <span className="sr-only">Next</span>
							</a>
						  </div>
					</div>
				</div>

				<div className="col-lg-6 col-xl-6">
					<div className="intro-text-box text-box text-white">
						<div className="top-meta">11.11.18  /  in <a href="">Events</a></div>
						<h3>Top 5 best events in november</h3>
						<p>A festival is an event ordinarily celebrated by a community and
							 centering on some characteristic aspect of that community and its
							  religion or cultures. It is often marked as a local or national
							   holiday, mela, or eid. A festival constitutes typical cases of 
							   glocalization, as well as the high culture-low culture
								interrelationship. Religious commemoration and thanksgiving .....
								.</p>
						<a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#"/></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="container text-center" style="background-color: black;" >
		<h2 style="color: white; " className= "section-title">Partners</h2>
	<ul className="blog-filter">
		<li ><a href="#" style="border-radius: 100%; height: 100px; background-image: url(img/feast2.jpg);">Team 1</a></li>
		<li ><a href="#" style="border-radius: 100%; height: 100px; background-image: url(img/feast1.jpg);">Team 2</a></li>
		<li ><a href="#" style="border-radius: 100%; height: 100px; background-image: url(img/feast4.jpg);">Team 3</a></li>
		<li ><a href="#" style="border-radius: 100%; height: 100px; background-image: url(img/feast5.jpg);">Team 4</a></li>
		<li ><a href="#" style="border-radius: 100%; height: 100px; background-image: url(img/feast6.jpg);">Team 5</a></li>
		<li ><a href="#" style="border-radius: 100%; height: 100px; background-image: url(img/feast7.jpg);">Team 6</a></li>
		<li ><a href="#" style="border-radius: 100%; height: 100px; background-image: url(img/feast8.jpg);">Team 7</a></li>
		<li ><a href="#" style="border-radius: 100%; height: 100px; background-image: url(img/feast9.jpg);">Team 8 </a></li>
	</ul>
	</section>
	
	<section className="blog-section spad">
		<div className="container">
			<div className="row">
				<div className="col-xl-9 col-lg-8 col-md-7">
					<div className="blog-item">
						<div className="blog-thumb">
							<img src="img/feast10.jpg" alt="" style="height: 350px"/>
						</div>
						<div className="blog-text text-box text-white">
							<div className="top-meta">11.11.18  /  in <a href="">Events</a></div>
							<h3>The best online Events is on going</h3>
							<p>A festival is an event ordinarily celebrated by a community and
								centering on some characteristic aspect of that community and its
								 religion or cultures. It is often marked as a local or national
								  holiday, mela, or eid. A festival constitutes typical cases of 
								  glocalization, as well as the high culture-low culture
								   interrelationship. Religious commemoration and thanksgiving .........</p>
							<a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#"/></a>
						</div>
					</div>
					<div className="blog-item">
						<div className="blog-thumb">
							<img src="img/feast9.jpg" alt="" style="height: 350px" />
						</div>
						<div className="blog-text text-box text-white">
							<div className="top-meta">11.11.18  /  in <a href="">Events</a></div>
							<h3>The best online Events is on going</h3>
							<p>A festival is an event ordinarily celebrated by a community and
								centering on some characteristic aspect of that community and its
								 religion or cultures. It is often marked as a local or national
								  holiday, mela, or eid. A festival constitutes typical cases of 
								  glocalization, as well as the high culture-low culture
								   interrelationship. Religious commemoration and thanksgiving .......</p>
							<a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#"/></a>
						</div>
					</div>
					<div className="blog-item">
						<div className="blog-thumb">
							<img src="img/feast8.jpg" alt="" style="height: 350px" />
						</div>
						<div className="blog-text text-box text-white">
							<div className="top-meta">11.11.18  /  in <a href="">Events</a></div>
							<h3>The best online Events is on going</h3>
							<p>A festival is an event ordinarily celebrated by a community and
								centering on some characteristic aspect of that community and its
								 religion or cultures. It is often marked as a local or national
								  holiday, mela, or eid. A festival constitutes typical cases of 
								  glocalization, as well as the high culture-low culture
								   interrelationship. Religious commemoration and thanksgiving ......</p>
							<a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#"/></a>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-4 col-md-5 sidebar">
					<div id="stickySidebar">
						<div className="widget-item">
							<h4 className="widget-title">Places to visits</h4>
							<div className="trending-widget">
								<div className="tw-item">
									<div className="tw-thumb">
										<img src="./img/blog-widget/1.jpg" alt="#" />
									</div>
									<div className="tw-text">
										<div className="tw-meta">11.11.18  /  in <a href="">Events</a></div>
										<h5>The best online Events is on going</h5>
									</div>
								</div>
								<div className="tw-item">
									<div className="tw-thumb">
										<img src="./img/blog-widget/2.jpg" alt="#" />
									</div>
									<div className="tw-text">
										<div className="tw-meta">11.11.18  /  in <a href="">Events</a></div>
										<h5>The best online Events is on going</h5>
									</div>
								</div>
								<div className="tw-item">
									<div className="tw-thumb">
										<img src="./img/blog-widget/3.jpg" alt="#" />
									</div>
									<div className="tw-text">
										<div className="tw-meta">11.11.18  /  in <a href="">Events</a></div>
										<h5>The best online Events is on going</h5>
									</div>
								</div>
								<div className="tw-item">
									<div className="tw-thumb">
										<img src="./img/blog-widget/4.jpg" alt="#" />
									</div>
									<div className="tw-text">
										<div className="tw-meta">11.11.18  /  in <a href="">Events</a></div>
										<h5>The best online Events is on going</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="widget-item">
							<div className="categories-widget">
								<h4 className="widget-title">Categories</h4>
								<ul>
									<li><a href="">Events</a></li>
									<li><a href="">Adventures</a></li>
									<li><a href="">Online Events</a></li>
									<li><a href="">Team Events</a></li>
									<li><a href="">Community</a></li>
									<li><a href="">Uncategorized</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section >
		<div className="jumbotron">
			<div className="row">
				<div className="col">
<video src="video/fest.mp4" loop autoplay="true"  >

					</video>
				</div>

			</div>
					
				
		</div>
	</section>
	<section className="newsletter-section">
		<div className="container">
			<h2>Subscribe to our newsletter</h2>
			<form className="newsletter-form">
				<input type="text" placeholder="ENTER YOUR E-MAIL" />
				<button className="site-btn">subscribe  <img src="img/icons/double-arrow.png" alt="#"/></button>
			</form>
		</div>
	</section>

			</>

		)
	}
}



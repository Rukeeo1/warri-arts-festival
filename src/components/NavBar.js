import React from 'react'
import { Link } from 'react-router-dom'

export class Nav extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
		super(props)
    }
    render() {
        return (
    <>
	<div id="preloder">
		<div className="loader"></div>
	</div>
	<header className="header-section">
		<div className="header-warp">
			<div className="header-social d-flex justify-content-end">
				<p>Follow us:</p>
				<a href="#"><i className="fa fa-pinterest"></i></a>
				<a href="#"><i className="fa fa-facebook"></i></a>
				<a href="#"><i className="fa fa-twitter"></i></a>
				<a href="#"><i className="fa fa-dribbble"></i></a>
				<a href="#"><i className="fa fa-behance"></i></a>
			</div>
			<div className="header-bar-warp d-flex">
				<a href="home.html" className="site-logo">
					<img src="./img/logo.png" alt="" />
				</a>
				<nav className="top-nav-area w-100">
					<div className="user-panel">
					<Link to="/"> Login</Link> / <Link to="/"> Register</Link>
					</div>
					<ul className="main-menu primary-menu">
						
						<li><Link to="/"> Intro</Link></li>
						<li><Link to="/"> About</Link></li>
						<li><Link to="/"> Event</Link>
							<ul className="sub-menu">
								<li><Link to="/"> Singles Events</Link></li>
							</ul>
						</li>
						<li><Link to="/"> Venue</Link></li>
						<li><Link to="/"> News</Link></li>
						<li><Link to="/"> Contact</Link></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
	<section className="hero-section overflow-hidden" >
		<div className="hero-slider owl-carousel"  >
			<div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" data-setbg="img/feast7.jpg">
				<div className="container" style="margin-top: -300px;">
					<h2 style=" font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">{this.props.values}</h2>
					</div>
			</div>
		</div>
	</section>
	</>
)}
}

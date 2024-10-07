import type {Metadata} from "next";
import type {FunctionComponent} from "react";

import Link from "next/link";
import data from "blog/data";
import Form from "components/ngl";
import {Section} from "components/section";
import TypingAnimation from "components/typing-animation";
import Icon from "components/fa-icon";
import CertificatesSwiper from "certificates/swiper";
import Skill from "components/skill";
import Image from "next/image";
import {formatter} from "utils";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Home",
	description:
		"I am a student who creates websites and mobile applications. I specialize in front-end development but I can handle back-end as well.",
};

const HomePage: FunctionComponent = async () => (
	<>
		<Section id="pages.home">
			<div className="home-banner">
				<div className="container">
					<div className="row full-screen align-items-center">
						<div className="col-lg-6">
							<div className="type-box">
								<h6>Hello, I am</h6>
								<h1>Tomáš Wróbel</h1>
								<p className="lead">
									I am passionate{" "}
									<TypingAnimation strings={["web developer", "programmer", "student"]} />
								</p>
								<p className="desc">
									I am a student who creates websites and mobile applications. I specialize in
									front-end development but I can handle back-end as well.
								</p>
								<div className="btn-bar">
									<a className="button" href="/documents/CV.pdf" download>
										Download CV
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="hb-img">
								<img src="/images/intro.webp" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
		<Section id="pages.aboutMe">
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-6 mt-1 pb-1">
					<div className="about-me">
						<div className="img">
							<div className="img-in">
								<img src="/images/code.png" title="" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 mt-1 pb-1">
					<div className="about-info">
						<h3>
							Skillful programmer with <Icon name="heart" style="solid" label="Love" /> for web
						</h3>
						<p>
							I wrote my Hello World in Java when I was 11. Since the age of 12 I&#8216;ve been
							specialized in web. in web technologies. These days I develop open-source web apps, These
							days I develop open-source Web or Flutter apps &ndash; This web is{" "}
							<a href="https://github.com/tomaswrobel/tomaswrobel.dev" target="_blank">
								one of them
							</a>
							.
						</p>
						<br />
						<div className="skills-box">
							<Skill name="HTML5" level="96%" />
							<Skill name="TypeScript + React" level="92%" />
							<Skill name="Design" level="16%" />
							<Skill name="Flutter + Dart" level="63%" />
						</div>
					</div>
				</div>
			</div>
		</Section>
		<Section id="pages.certificates">
			<CertificatesSwiper />
		</Section>
		<Section id="pages.services">
			<div className="row">
				<div className="col-sm-6 mt-1 pb-1">
					<div className="feature-box media">
						<i className="icon theme-bg icon-mobile" />
						<div className="feature-content media-body">
							<h5>Responsive design</h5>
							<p>
								Websites I create work on all devices, so you can increase the number of potential
								customers
							</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 mt-1 pb-1">
					<div className="feature-box media">
						<i className="icon theme-bg icon-global" />
						<div className="feature-content media-body">
							<h5>Web app development</h5>
							<p>
								I create web apps with modern technologies. They are fast and work offline. However, I
								can target old browsers too.
							</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 mt-1 pb-1">
					<div className="feature-box media">
						<i className="icon theme-bg  icon-genius" />
						<div className="feature-content media-body">
							<h5>React.js</h5>
							<p>
								Many companies use React. I know it very well and this website is built on Next.js. I
								can also help you with Ionic, or whichever framework you prefer.
							</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 mt-1 pb-1">
					<div className="feature-box media">
						<i className="icon theme-bg icon-lock" />
						<div className="feature-content media-body">
							<h5>Security</h5>
							<p>
								These days, SSL certificate is a must. I can install it for you. I also know how to
								protect your databases, e. g. if you launched an online store.
							</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 mt-1 pb-1">
					<div className="feature-box media">
						<i className="icon theme-bg icon-target" />
						<div className="feature-content media-body">
							<h5>Search engine optimization</h5>
							<p>
								SEO is important. I am not an expert, but I can handle my part as a web developer. I can
								handle Google Analytics and Search Console as well.
							</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 mt-1 pb-1">
					<div className="feature-box media">
						<i className="icon theme-bg icon-speedometer" />
						<div className="feature-content media-body">
							<h5>Fast</h5>
							<p>
								Websites I create are fast, optimized and compatible. This is also the case with my web
								apps. I can also help you with Google PageSpeed Insights.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
		<Section id="pages.blog">
			<div className="row">
				{(await data()).slice(0, 4).map(blog => (
					<div className="col-md-6 mt-1 pb-1" key={blog.id}>
						<div className="blog-grid">
							<div className="blog-img">
								<Link href={blog.url}>
									<Image src={blog.img} title="" alt="" loading="lazy" placeholder="blur" />
								</Link>
							</div>
							<div className="blog-info">
								<div className="meta">{formatter.format(blog.date)}</div>
								<h6>
									<Link href={blog.url}>{blog.name}</Link>
								</h6>
							</div>
						</div>
					</div>
				))}
				<div className="col-12 read-more-blog text-center">
					<Link href="/blog" className="button">
						See more
					</Link>
				</div>
			</div>
		</Section>
		<Section id="pages.contact">
			<div className="row mb-8">
				<div className="col-lg-5 col-xl-4 mt-1 pb-1">
					<div className="contact-info">
						<h4>What&#8216;s your story? Get in touch</h4>
						<p>
							Always available for freelancing if the right project comes along, Feel free to contact me.
						</p>
						<ul>
							<li className="media">
								<Icon label="mail" name="envelope" style="solid" />
								<span className="media-body">mail@tomaswrobel.dev</span>
							</li>
							<li className="media">
								<Icon label="Discord" name="discord" style="brands" />
								<span className="media-body">tomaswrobel</span>
							</li>
							<li className="media">
								<Icon label="Location" name="map-marked-alt" style="solid" />
								<span className="media-body">Czech Republic</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-7 col-xl-8 mt-1 pb-1">
					<div className="contact-form">
						<h4 lang="en">Not gonna lie.</h4>
						<p>
							You can send me an anonymous message via <a href="https://ngl.link">NGL</a>. I will reply to
							it via Instagram stories. This is <strong>not</strong> an official contact form.
						</p>
						<Form />
						<p className="note">
							I do not collect any data, NGL gets my server&#8216;s IP address. Tracking cookies are not
							used.
						</p>
					</div>
				</div>
			</div>
			<div className="my-3">
				<br />
			</div>
		</Section>
	</>
);

export default HomePage;

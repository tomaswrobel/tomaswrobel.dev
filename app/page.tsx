import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import type {FunctionComponent} from "react";
import {data} from "./components/blog";
import Button from "./components/button";
import CertificatesSwiper from "./components/certificates-swiper";
import Code from "./components/code.mdx";
import Icon from "./components/fa-icon";
import Form from "./components/ngl";
import {Resume, ResumeImage, ResumeText} from "./components/resume";
import {Section} from "./components/section";
import Skill from "./components/skill";
import TypingAnimation from "./components/typing-animation";
import Doucse from "./images/doucse.webp";
import Fastest from "./images/fastest";
import Intro from "./images/intro.webp";
import Wigym from "./images/wigym.webp";
import {formatter} from "./utils";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Domovská stránka",
	description: "Vytvářím webové aplikace a webové stránky. Specializuji se na front-end, ale zvládnu i back-end.",
};

const HomePage: FunctionComponent = async () => (
	<>
		<Section id="pages.home">
			<div className="home-banner">
				<div className="container-sm">
					<div className="row full-screen align-items-center">
						<div className="col-lg-6">
							<div className="type-box">
								<span>Zdraví Vás</span>
								<h1>Tomáš Wróbel</h1>
								<p className="lead">
									Jsem <TypingAnimation strings={["webový vývojář", "programátor"]} />
								</p>
								<p className="desc">
									Vytvářím webové aplikace a webové stránky. Specializuji se na front-end, ale zvládnu
									i back-end.
								</p>
								<div className="btn-bar">
									<Button to="#certificates">Prohlédnout si certifikáty</Button>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="img">
								<Image
									draggable={false}
									src={Intro}
									fill
									alt=""
									className="rounded-circle bg-primary"
								/>
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
						<Code />
					</div>
				</div>
				<div className="col-lg-6 mt-1 pb-1">
					<div className="about-info">
						<h3>
							Programátor se <Icon name="heart" style="solid" label="srdcem" /> pro web
						</h3>
						<p>
							Hello World v Javě jsem napsal, když mi bylo 11. Již ve 12 jsem přičichl k webu. Ve volném
							čase dosud vyvíjím open-source webové aplikace, přičemž tento web je{" "}
							<a href="https://github.com/tomaswrobel/tomaswrobel.dev" target="_blank">
								jedním z nich
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
		<Section id="pages.experience">
			<div className="resume-box">
				<Resume>
					<ResumeImage alt="" src={Wigym} width={116} height={116} />
					<ResumeText title="Student" subtitle="Wigym | Prezenčně | 2018 - 2025" label="SŠ">
						Studoval jsem na{" "}
						<a href="https://wigym.cz" target="_blank">
							Wichterlově gymnáziu
						</a>{" "}
						, které mi dalo solidní základy ve všeobecném vzdělání. Studia jsem zanechal v červnu 2025 ve prospěch kariéry.
					</ResumeText>
				</Resume>
				<Resume>
					<ResumeImage alt="" src={Doucse} width={116} height={116} />
					<ResumeText
						title="Lektor příjimacích zkoušek"
						subtitle="Doučse | Distančně | 2024 - 2025"
						label="DPP"
					>
						Byl jsem lektorem příjimacích zkoušek u{" "}
						<a href="https://www.doucse.cz" target="_blank">
							Vzdělávacího centra Doučse, z. s.
						</a>
						, a to ve školním roce 2024/2025. Doučoval jsem studenty, kteří se připravovali na přijímací
						zkoušky na gymnázia, v menší míře i na jiné střední školy. Doučování probíhalo online, přesto se
						žákům vesměs dařilo
					</ResumeText>
				</Resume>
				<Resume>
					<div className="col-sm-3 col-md-3 col-xl-2">
						<div className="resume-box-left">
							<Fastest />
						</div>
					</div>
					<ResumeText title="Webový vývojář" subtitle="Fastest | Kombimovaně | od 2025" label="HPP">
						Právě pracuji ve <a href="https://fastest.cz">Fastest</a>, kde si{" "}
						<q>na krabicová řešení si nepotrpíme</q>. Vyvíjíme webové aplikace i další IT řešení podle
						potřeb klientů.
					</ResumeText>
				</Resume>
			</div>
		</Section>
		<Section id="pages.services">
			<div className="row">
				<div className="col-md-6 mt-1 pb-1">
					<div className="feature-box">
						<i className="icon theme-bg icon-mobile" />
						<div className="feature-content">
							<h4>Responzivní weby</h4>
							<p>
								Webové stránky, které vytvořím, budou vypadat dobře na všech zařízeních. Od mobilu až po
								počítač. Nad to nenadužívám JavaScript, vždy hledám nejoptimalnější řešení.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-1 pb-1">
					<div className="feature-box">
						<i className="icon theme-bg icon-global" />
						<div className="feature-content">
							<h4>Webový vývoj</h4>
							<p>
								Vedle klasických webů tvořím zejména webové aplikace. Ty často fungují offline a vždy
								používají nejmodernější technologie. Kompatibilní však zůstavají.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-1 pb-1">
					<div className="feature-box">
						<i className="icon theme-bg  icon-genius" />
						<div className="feature-content">
							<h4>React.js</h4>
							<p>
								Mnoho firem používá React. Já ho znám velmi dobře a tento web je postaven na Next.js.
								Také si poradím s Ionic nebo jakýmkoli jiným frameworkem, který preferujete.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-1 pb-1">
					<div className="feature-box">
						<i className="icon theme-bg icon-lock" />
						<div className="feature-content">
							<h4>Zabezpečení</h4>
							<p>
								V dnešní době je SSL certifikát nutností. Mohu vám ho nainstalovat. Také vím, jak
								ochránit vaše databáze, např. pokud jste spustili internetový obchod.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-1 pb-1">
					<div className="feature-box">
						<i className="icon theme-bg icon-target" />
						<div className="feature-content">
							<h4 lang="en">Search engine optimization</h4>
							<p>
								SEO je důležité. Nejsem odborník, ale zvládnu svou část jako webový vývojář. Umím
								pracovat s Google Analytics a Google Search Console, a také s dalšími nástroji.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-1 pb-1">
					<div className="feature-box">
						<i className="icon theme-bg icon-speedometer" />
						<div className="feature-content">
							<h4>Rychlost</h4>
							<p>
								Webové stránky, které vytvářím, jsou rychlé, optimalizované a kompatibilní. To platí i
								pro mé webové aplikace. Mohu vám také pomoci s PageSpeed Insights.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
		<Section id="pages.blog">
			<div className="row">
				{(await data("blog")).slice(0, 4).map(blog => (
					<div className="col-md-6 mt-1 pb-1" key={blog.id}>
						<div className="blog-grid">
							<div className="blog-img">
								<Link href={blog.url}>
									<Image
										draggable={false}
										src={blog.img}
										title={blog.name}
										alt=""
										loading="lazy"
										placeholder="blur"
										style={{maxWidth: "100%"}}
									/>
								</Link>
							</div>
							<div className="blog-info">
								<div className="meta">{formatter.format(blog.date)}</div>
								<h4>
									<Link href={blog.url}>{blog.name}</Link>
								</h4>
							</div>
						</div>
					</div>
				))}
				<div className="col-12 read-more-blog text-center">
					<Link href="/blog" className="btn">
						Více článků
					</Link>
				</div>
			</div>
		</Section>
		<Section id="pages.contact">
			<div className="row mb-8">
				<div className="col-lg-5 col-xl-4 mt-1 pb-1">
					<div className="contact-info">
						<h4>Kontaktujte mě</h4>
						<p>
							Chcete-li se se mnou spojit, použijte prosím některý z níže uvedených kontaktů. Odpovím vám
							co nejdříve.
						</p>
						<ul>
							<li>
								<Icon label="e-mail" name="at" style="solid" />
								<span>mail@tomaswrobel.dev</span>
							</li>
							<li>
								<Icon label="datovka" name="envelope-circle-check" style="solid" />
								<span>uv3irnz</span>
							</li>
							<li>
								<Icon label="Discord" name="discord" style="brands" />
								<span>tomaswrobel</span>
							</li>
							<li>
								<Icon label="Instagram" name="instagram" style="brands" />
								<span>wrobel.tomas</span>
							</li>
						</ul>
						<p className="note">
							Se zprávou do datové schránky vždy nakládám stejně jako s dopisem na adresu trvalého
							bydliště.
						</p>
					</div>
				</div>
				<div className="col-lg-7 col-xl-8 mt-1 pb-1">
					<div className="contact-form">
						<h4 lang="en">Not gonna lie.</h4>
						<p>
							Můžete mi poslat anonymní zprávu přes <a href="https://ngl.link">NGL</a>. Odpověď pak bude
							viset 24 h na mém Instagramu. Upozorňuji, že se nejedná o oficiální způsob komunikace.
						</p>
						<Form />
						<p className="note">
							Nesbírám žádná data, NGL dostává IP adresu mého serveru. Sledovací cookies se nepoužívají
						</p>
					</div>
				</div>
			</div>
			<div className="py-3">
				<br />
			</div>
		</Section>
	</>
);

export default HomePage;

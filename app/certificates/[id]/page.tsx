import "highlight.js/scss/monokai-sublime.scss";
import type {Metadata} from "next";
import Image from "next/image";
import {formatter} from "utils";

interface Params {
	id: string;
}

interface Props {
	params: Params;
}

export const dynamicParams = false;

export async function generateStaticParams() {
	const {data} = await import("../data");
	return data.map<Params>(s => ({id: s.id}));
}

export async function generateMetadata({params}: Props) {
	const {data} = await import("../data");
	const {author, date, name} = data.find(s => s.id === params.id)!;

	const metadata: Metadata = {
		title: `Tomáš Wróbel | ${name} Certificate`,
		description: `I claimed ${name} certificate from ${author} on ${formatter.format(date)}.`,
	};

	return metadata;
}

export default async function Certificates({params: {id}}: Props) {
	const {data} = await import("../data");
	const img = await import(`../images/${id}.png`);
	const certificate = data.find(s => s.id === id)!;
	
	const Brand = (await import("components/brands"))[certificate.author];
	
	return (
		<div className="single-blog">
			<div className="container">
				<div className="blog-feature-img">
					<Image src={img.default} title="" alt="" loading="lazy" placeholder="blur" />
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<article>
							<div className="article-title">
								<h2>{certificate.name}</h2>
								<div className="media">
									<div className="avatar">
										<Brand />
									</div>
									<div className="media-body">
										<label>{certificate.author}</label>
										<span>{formatter.format(certificate.date)}</span>
									</div>
								</div>
							</div>
							<div className="article-content">
								<h3>{certificate.author}</h3>
								{certificate.author === "SoloLearn" && (
									<>
										<p>
											SoloLearn is a fantastic online platform that offers a variety of free
											programming courses. It&#8216;s a great way to learn new skills and have fun
											at the same time. Here are some of the things you can do on SoloLearn:
										</p>
										<ul>
											<li>
												<strong>Take interactive courses</strong>: SoloLearn&#8216;s courses are
												designed to be fun and engaging.
											</li>
											<li>They include quizzes, coding challenges, and real-world projects.</li>
											<li>
												<strong>Learn from experienced programmers</strong>: SoloLearn&#8216;s
												instructors are experts in their field. They will teach you everything
												you need to know to become a successful programmer.
											</li>
											<li>
												<strong>Earn badges and certificates</strong>: As you progress through
												the courses, you will earn badges and certificates. These can help you
												stand out from the crowd when applying for jobs or internships.
											</li>
											<li>
												<strong>Connect with other learners</strong>: SoloLearn has a large
												community of learners from all over the world. You can connect with
												other people who are learning the same things as you and ask for help or
												advice.
											</li>
											<li>
												<strong>Practice coding</strong>: SoloLearn offers a variety of coding
												challenges that you can use to practice your skills. These challenges
												are designed to be fun and challenging, and they will help you improve
												your programming skills.
											</li>
										</ul>
										<p>
											SoloLearn is a great way to learn programming, even if you have no prior
											experience. The platform is easy to use and the courses are well-designed.
											If you&#8216;re interested in learning to code, SoloLearn is a great place
											to start.
										</p>
									</>
								)}
								{certificate.author === "freeCodeCamp" && (
									<>
										<p>
											freeCodeCamp is a non-profit organization that offers free online coding
											courses. It was founded in 2014 by Quincy Larson, a former teacher and
											software engineer. The organization&#8216;s mission is to help people learn
											to code for free, and it has helped millions of people around the world
											learn valuable coding skills.
										</p>
										<p>
											freeCodeCamp offers a variety of coding courses, from basic HTML and CSS to
											advanced JavaScript and Python. The courses are self-paced and accessible to
											people of all skill levels. They include interactive lessons, coding
											challenges, and real-world projects that help students apply what
											they&#8216;ve learned.
										</p>
										<p>
											One of the unique features of freeCodeCamp is its emphasis on hands-on
											learning. Students are encouraged to work on coding projects that benefit
											non-profit organizations. This gives them real-world experience and helps
											them build a portfolio of work that they can show to potential employers.
										</p>
										<p>
											Another key feature of freeCodeCamp is its supportive community. Students
											can connect with each other through online forums and chat rooms, where they
											can ask questions, share resources, and collaborate on projects. The
											community is a valuable resource for students who are looking for help or
											encouragement as they learn to code.
										</p>
										<p>
											freeCodeCamp is a great place to start if you want to learn to code. The
											courses are free, the community is supportive, and the projects are
											rewarding. Whether you&#8216;re a beginner or an experienced coder, you can
											find something valuable to learn on freeCodeCamp.
										</p>
									</>
								)}
								{certificate.author === "Programming Hub" && (
									<>
										<p>
											Programming Hub is a popular online platform that offers a wide range of
											courses on programming and technology. The platform is designed to help
											people learn new skills and advance their careers in technology.
										</p>
										<p>
											Programming Hub offers courses on a variety of topics, including programming
											languages, web development, mobile app development, data science, and
											machine learning. The courses are self-paced and accessible to people of all
											skill levels, from beginners to advanced programmers.
										</p>
										<p>
											Programming Hub is a great place to learn new skills and advance your career
											in technology. Whether you&#8216;re looking to learn a new programming
											language, build a mobile app, or explore the field of data science,
											Programming Hub has something for you. The courses are high-quality, the
											instructors are experienced, and the community is supportive. If
											you&#8216;re serious about advancing your career in technology, check out
											Programming Hub today.
										</p>
									</>
								)}
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
}

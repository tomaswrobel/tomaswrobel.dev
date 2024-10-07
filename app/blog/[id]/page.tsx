import "highlight.js/scss/monokai-sublime.scss";
import type {Post} from "blog/posts";
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
	const {readdir} = await import("fs/promises");
	const array = await readdir("app/blog/posts");
	return array.map<Params>(id => ({id}));
}

export async function generateMetadata({params}: Props) {
	const json: Post = await import(`../posts/${params.id}`);
	const metadata: Metadata = {
		title: `Tomáš Wróbel | ${json.name}`,
		description: json.description,
	};

	return metadata;
}

export default async function Blog({params}: Props) {
	const post: Post = await import(`../posts/${params.id}`);

	return (
		<div className="single-blog">
			<div className="container">
				<div className="blog-feature-img">
					<Image src={post.img} title="" alt="" placeholder="blur" />
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<article>
							<div className="article-title">
								<h2>{post.name}</h2>
								<div className="media">
									<div className="avatar rounded-circle">
										<img src="/images/me.png" title="" alt="" />
									</div>
									<div className="media-body">
										<label>Tomáš Wróbel</label>
										<span>{formatter.format(post.date)}</span>
									</div>
								</div>
							</div>
							<div className="article-content">
								<post.default />
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
}

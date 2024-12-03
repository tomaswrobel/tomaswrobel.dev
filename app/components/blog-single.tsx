import type {MDXComponents} from "mdx/types";
import Image from "next/image";
import type {ComponentType, FunctionComponent} from "react";
import {formatter} from "utils";
import type {FrontMatter, MDX} from "./blog";
import * as authors from "./blog-authors";

const BlogSingle: FunctionComponent<BlogSingle.Props> = ({module: {default: Post, img, name, date, author}}) => {
	const Author = authors[author];

	return (
		<div className="single-blog">
			<div className="container">
				<div className="blog-feature-img">
					<Image src={img} title="" alt="" placeholder="blur" />
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<article>
							<div className="article-title">
								<h2>{name}</h2>
								<div className="media">
									<Author />
									<div className="media-body">
										<label>{author}</label>
										<span>{formatter.format(date)}</span>
									</div>
								</div>
							</div>
							<div className="article-content">
								<Post />
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
};

declare namespace BlogSingle {
	interface Props {
		module: MDX;
	}
}

export default BlogSingle;

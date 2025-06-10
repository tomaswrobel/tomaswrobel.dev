import Image from "next/image";
import type {FunctionComponent} from "react";
import {formatter} from "../utils";
import type {MDX} from "./blog";
import * as authors from "./blog-authors";
import Icon from "./fa-icon";

const BlogSingle: FunctionComponent<BlogSingle.Props> = ({
	module: {default: Post, img, name, date, author, updated},
}) => {
	const Author = authors[author];

	return (
		<div className="single-blog">
			<div className="container-sm">
				<div className="blog-feature-img">
					<Image draggable={false} src={img} title="" alt="" placeholder="blur" style={{maxWidth: "100%"}} />
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<article>
							<div className="article-title">
								<h2>{name}</h2>
								<div className="article-meta">
									<Author />
									<div className="ps-2 flex-grow-1">
										<label>{author}</label>
										<span>{formatter.format(date)}</span>
									</div>
								</div>
							</div>
							<div className="article-content">
								{updated && (
									<>
										<Icon name="check" style="solid" />
										{"\t"}
										Aktualizováno: {formatter.format(updated)}
									</>
								)}
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

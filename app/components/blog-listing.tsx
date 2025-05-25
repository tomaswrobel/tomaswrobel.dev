"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import {FunctionComponent, useEffect, useMemo, useState} from "react";
import {formatter} from "utils";
import {Data} from "./blog";

export const BlogListing: FunctionComponent<BlogListing.Props> = ({data, sort = 4, heading}) => {
	const [active, setActive] = useState(1);
	const state = useMemo(
		() => Array.from({length: Math.ceil(data.length / sort)}).map((_, idx) => idx + 1),
		[sort, data.length]
	);

	useEffect(() => {
		const page = Number(location.hash.slice(1));

		if (Number.isInteger(page) && page > 0 && page <= state.length) {
			setActive(page);
		} else {
			history.replaceState(null, "", `${location.pathname}#1`);
		}
	}, [state.length]);

	return (
		<div className="blog-listing">
			<div className="container-sm">
				<div className="title text-center">
					<h1>{heading}</h1>
				</div>
				<div className="row">
					{data.slice((active - 1) * sort, active * sort).map(({author, date, id, img, name, url}) => (
						<div className="col-md-6 mt-1 pb-1 blog-list-item" key={id}>
							<div className="blog-grid">
								<div className="blog-img">
									<Link href={url} aria-label={name}>
										<Image
											draggable={false}
											loading="lazy"
											placeholder="blur"
											src={img}
											title=""
											alt=""
											style={{maxWidth: "100%"}}
										/>
									</Link>
								</div>
								<div className="blog-info">
									<div className="meta">
										{formatter.format(date)}
										{" | "}
										{author}
									</div>
									<h4>
										<Link href={url}>{name}</Link>
									</h4>
								</div>
							</div>
						</div>
					))}
					<div className="col-12 blog-pagination">
						<ul className="pagination justify-content-center">
							<li>
								<a
									className={clsx("page-link", {
										disabled: active === 1,
									})}
									href={`#${active - 1}`}
									tabIndex={-1}
									onClick={() => {
										if (active !== 1) {
											setActive(active - 1);
										}
									}}
								>
									<i className="fas fa-chevron-left" />
								</a>
							</li>
							{state.map(state => (
								<li key={state}>
									<a
										className={clsx("page-link", {
											active: active === state,
										})}
										target="_self"
										href={`#${state}`}
										onClick={setActive.bind(null, state)}
									>
										{state} <span className="sr-only">(current)</span>
									</a>
								</li>
							))}
							<li>
								<a
									className={clsx("page-link", {
										disabled: active === state.length,
									})}
									href={`#${active + 1}`}
									onClick={() => {
										if (active !== state.length) {
											setActive(active + 1);
										}
									}}
								>
									<i className="fas fa-chevron-right" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export declare namespace BlogListing {
	interface Props {
		data: Data[];
		sort?: number;
		heading: string;
	}
}

export default BlogListing;

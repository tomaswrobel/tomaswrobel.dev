"use client";
import Link from "next/link";
import {type FunctionComponent, useState, useMemo} from "react";
import clsx from "clsx";
import Image from "next/image";
import {formatter} from "utils";

const Paginated: FunctionComponent<Paginated.Props> = ({data, sort = 4, heading}) => {
	const [active, setActive] = useState(1);
	const state = useMemo(
		() => Array.from({length: Math.ceil(data.length / sort)}).map((_, idx) => idx + 1),
		[sort, data.length]
	);

	return (
		<div className="blog-listing">
			<div className="container">
				<div className="title text-center">
					<h1>{heading}</h1>
				</div>
				<div className="row">
					{data.slice((active - 1) * sort, active * sort).map(({author, date, id, img, name, url}) => (
						<div className="col-md-6 mt-1 pb-1 blog-list-item" key={id}>
							<div className="blog-grid">
								<div className="blog-img">
									<Link href={url}>
										<Image loading="lazy" placeholder="blur" src={img} title="" alt="" />
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
							<li
								className={clsx("page-item", {
									disabled: active === 1,
								})}
							>
								<a
									className="page-link"
									href="#"
									tabIndex={-1}
									onClick={e => {
										e.preventDefault();
										setActive(active === 1 ? 1 : active - 1);
									}}
								>
									<i className="fas fa-chevron-left" />
								</a>
							</li>
							{state.map(state => (
								<li
									key={state}
									className={clsx("page-item", {
										active: active === state,
									})}
								>
									<a
										className="page-link"
										href="#"
										onClick={e => {
											e.preventDefault();
											setActive(state);
										}}
									>
										{state} <span className="sr-only">(current)</span>
									</a>
								</li>
							))}
							<li
								className={clsx("page-item", {
									disabled: active === state.length,
								})}
							>
								<a
									className="page-link"
									href="#"
									onClick={e => {
										e.preventDefault();
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

declare namespace Paginated {
	interface Data {
		id: string;
		img: string;
		name: string;
		author: string;
		date: Date;
		url: string;
	}
	interface Props {
		data: Data[];
		sort?: number;
		heading: string;
	}
}

export default Paginated;

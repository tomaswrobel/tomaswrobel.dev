"use client";
import clsx from "clsx";
import Link from "next/link";
import {useEffect, useState, type FunctionComponent} from "react";
import {sections, type Section} from "./section";

export const DynamicMenu: FunctionComponent = () => {
	const [active, setActive] = useState<string>();

	useEffect(() => {
		function scroll() {
			let current = "";

			for (const section of document.querySelectorAll("section")) {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (window.scrollY >= sectionTop - sectionHeight / 3) {
					current = section.getAttribute("id") || "";
				}
			}

			setActive(current);
		}

		window.addEventListener("scroll", scroll);
		window.requestAnimationFrame(scroll);

		return function () {
			window.removeEventListener("scroll", scroll);
		};
	}, []);

	return (
		<ul className="nav">
			{sections.map(([, text, href = ""]) => (
				<li key={href} className={clsx({active: active === href})}>
					<a href={"#" + href}>
						<span>{text}</span>
					</a>
				</li>
			))}
		</ul>
	);
};

export const StaticMenu: FunctionComponent<{active: Section}> = ({active}) => (
	<ul className="nav">
		{sections.map(([id, text, href]) => (
			<li key={id} className={clsx({active: active === id})}>
				<Link href={href ? `/#${href}` : "/"}>
					<span>{text}</span>
				</Link>
			</li>
		))}
	</ul>
);

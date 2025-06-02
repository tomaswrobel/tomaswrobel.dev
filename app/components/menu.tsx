"use client";
import clsx from "clsx";
import Link from "next/link";
import {useEffect, useState, type FunctionComponent} from "react";
import {sections} from "./section";

const Menu: FunctionComponent<{forPath: string}> = ({forPath}) => {
	const [active, setActive] = useState<string>();

	useEffect(() => {
		if (forPath === "/") {
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
		} else {
			setActive(forPath.slice(1));
		}
	}, [forPath]);

	return (
		<ul className="nav">
			{sections.map(([, text, href = ""]) => (
				<li key={href}>
					<Link href={"/#" + href} className={clsx({active: active === href})}>
						<span>{text}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Menu;

"use client";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import Menu from "./menu";
import {type FunctionComponent, useEffect, useState} from "react";
import Me from "../images/me.png";
import Icon from "./fa-icon";
import Image from "next/image";

function switchColorScheme() {
	const {dataset} = document.documentElement;

	if (dataset.theme === "dark") {
		dataset.theme = "light";
	} else if (dataset.theme === "light") {
		dataset.theme = "dark";
	} else {
		const match = window.matchMedia("(prefers-color-scheme: dark)");
		dataset.theme = match.matches ? "light" : "dark";
	}
}

const Header: FunctionComponent<Header.Props> = () => {
	const [sidebarOffset, setSideBar] = useState(-10);
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		function touchStart(e: TouchEvent) {
			if (e.touches.length === 1 && e.touches[0].clientX < 10) {
				touchMove(e);
				document.addEventListener("touchmove", touchMove);
				document.addEventListener("touchend", touchEnd);
			}
		}

		function touchMove(e: TouchEvent) {
			setSideBar(Math.min(250, e.touches[0].clientX));
		}

		function touchEnd() {
			document.body.removeEventListener("touchmove", touchMove);
			document.body.removeEventListener("touchend", touchEnd);
			setSideBar(s => (s > 100 ? 250 : 0));
		}

		document.body.addEventListener("touchstart", touchStart);

		return () => {
			document.body.removeEventListener("touchstart", touchStart);
			touchEnd();
		};
	}, []);

	return (
		<header style={{"--sidebar-offset": sidebarOffset}}>
			<div className="button-group p-4">
				<button type="button" onClick={switchColorScheme}>
					<Icon name="moon" style="solid" label="Switch theme" />
				</button>
				{pathname === "/" || (
					<button type="button" onClick={() => router.back()}>
						<Icon name="arrow-left" style="solid" label="Go back" />
					</button>
				)}
			</div>
			<nav className="d-lg-none">
				<div className="d-flex">
					<div className="navbar-brand">
						<Link href="/" className="logo-text">
							Tomáš Wróbel
						</Link>
					</div>
					<button
						type="button"
						className="toggler-menu"
						onClick={() => setSideBar(s => (s === 250 ? -10 : 250))}
						aria-label="Menu"
					/>
				</div>
			</nav>
			<aside data-offset={sidebarOffset}>
				<div className="h-100">
					<div className="top">
						<div>
							<Image draggable={false} width={90} height={90} src={Me} title="" alt="" />
						</div>
						<h2>Tomáš</h2>
					</div>
					<Menu forPath={pathname} />
				</div>
				<div className="nav justify-content-center social-icons">
					<a href="https://discordapp.com/users/tomaswrobel">
						<Icon name="discord" style="brands" label="Discord" />
					</a>
					<a href="https://github.com/tomaswrobel">
						<Icon name="github" style="brands" label="GitHub" />
					</a>
					<a href="https://instagram.com/wrobel.tomas">
						<Icon name="instagram" style="brands" label="Instagram" />
					</a>
					<a href="https://www.linkedin.com/in/tomaswrobel/">
						<Icon name="linkedin" style="brands" label="LinkedIn" />
					</a>
				</div>
			</aside>
		</header>
	);
};

declare namespace Header {
	interface Props {
		current?: string;
	}
}

declare module "react" {
	interface CSSProperties {
		"--sidebar-offset"?: number;
	}
}

export default Header;

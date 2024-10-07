"use client";
import clsx from "clsx";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {DynamicMenu, StaticMenu} from "components/menu";
import {type FunctionComponent, useEffect, useRef, useState} from "react";
import Icon from "./fa-icon";

const switchColorScheme = () => {
	const {dataset} = document.documentElement;

	if (dataset.theme === "dark") {
		dataset.theme = "light";
	} else if (dataset.theme === "light") {
		dataset.theme = "dark";
	} else {
		const match = window.matchMedia("(prefers-color-scheme: dark)");
		dataset.theme = match.matches ? "light" : "dark";
	}
};

const Header: FunctionComponent<Header.Props> = () => {
	const [sideBar, setSideBar] = useState(false);
	const dom = useRef<HTMLElement>(null);
	const pathname = usePathname();
	const router = useRouter();

	// When sideBar = true, listen for outside click
	useEffect(() => {
		if (sideBar) {
			function outside(e: MouseEvent) {
				if (!dom.current?.contains(e.target as Node)) {
					setSideBar(false);
				}
			}

			document.addEventListener("click", outside);

			return function () {
				document.removeEventListener("click", outside);
			};
		}
	}, [sideBar]);

	return (
		<>
			<label className="color-switch" onClick={switchColorScheme}>
				<Icon name="moon" style="solid" label="Switch theme" />
			</label>
			{pathname === "/" || (
				<a className="back-link" onClick={() => router.back()} href="#">
					<Icon name="arrow-left" style="solid" label="Go back" />
				</a>
			)}
			<div className="mobile-header">
				<div className="d-flex">
					<div className="navbar-brand">
						<Link href="/" className="logo-text">
							Tomáš Wróbel
						</Link>
					</div>
					<div
						className={clsx("toggler-menu", {open: sideBar})}
						onClick={() => setSideBar(!sideBar)}
						aria-label="Menu"
					/>
				</div>
			</div>
			<header className={clsx({"menu-open": sideBar})} ref={dom}>
				<div className="h-100">
					<div className="top">
						<div>
							<img src="/images/me.png" title="" alt="" />
						</div>
						<h5>Tomáš W.</h5>
					</div>
					{pathname === "/" ? (
						<DynamicMenu />
					) : (
						<StaticMenu active={pathname.indexOf("/blog") ? "pages.home" : "pages.blog"} />
					)}
				</div>
				<div className="nav justify-content-center social-icons">
					<a href="https://facebook.com/wrobeltomas">
						<Icon name="facebook" style="brands" label="Facebook" />
					</a>
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
			</header>
		</>
	);
};

declare namespace Header {
	interface Props {
		current?: string;
	}
}

export default Header;

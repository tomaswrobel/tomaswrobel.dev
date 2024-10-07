import type {FunctionComponent, PropsWithChildren} from "react";
import {Rubik, Merriweather} from "next/font/google";
import Header from "components/header";

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "et-line/style.css";
import "./layout.scss";

const rubik = Rubik({
	fallback: ["Arial", "sans-serif"],
	subsets: ["latin-ext"],
	display: "swap",
});

const merriweather = Merriweather({
	fallback: ["'Times New Roman'", "serif"],
	subsets: ["latin-ext"],

	variable: "--font-law",
	weight: "400",
});

const RootLayout: FunctionComponent<PropsWithChildren> = ({children}) => (
	<html lang="en" className={merriweather.variable}>
		<body className={rubik.className}>
			<Header />
			<main>{children}</main>
		</body>
	</html>
);

export default RootLayout;

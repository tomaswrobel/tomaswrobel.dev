import type {FunctionComponent, PropsWithChildren} from "react";
import local from "next/font/local";
import Header from "components/header";

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "et-line/style.css";
import "./layout.scss";

const rubik = local({
	src: [
		{
			path: "fonts/Rubik-Italic-VariableFont_wght.ttf",
			style: "italic",
		},
		{
			path: "fonts/Rubik-VariableFont_wght.ttf",
			style: "normal",
		},
	],
	display: "swap",
	fallback: ["Arial", "sans-serif"],
});

const RootLayout: FunctionComponent<PropsWithChildren> = ({children}) => (
	<html lang="cs">
		<body className={rubik.className}>
			<Header />
			<main>{children}</main>
		</body>
	</html>
);

export default RootLayout;

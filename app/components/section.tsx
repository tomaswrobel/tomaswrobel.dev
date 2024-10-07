import type {FunctionComponent, ReactNode} from "react";
import {array} from "utils";

export const sections = array(
	["pages.home", "Home"],
	["pages.aboutMe", "About me", "about"],
	["pages.certificates", "Certificates", "certificates"],
	["pages.services", "Services", "services"],
	["pages.blog", "Blog", "blog"],
	["pages.contact", "Contact", "contact"]
);

export type Section = (typeof sections)[number][0];

export const Section: FunctionComponent<Section.Props> = ({id, children}) => {
	const section = sections.find(([s]) => s === id);

	if (!section) {
		throw new Error(`Unknown section: ${id}`);
	}

	if (2 in section) {
		return (
			<section id={section[2]}>
				<div className="container">
					<div className="title">
						<h3>{section[1]}</h3>
					</div>
					{children}
				</div>
			</section>
		);
	}

	return <section>{children}</section>;
};

export declare namespace Section {
	interface Props {
		id: Section;
		children: ReactNode;
	}
}

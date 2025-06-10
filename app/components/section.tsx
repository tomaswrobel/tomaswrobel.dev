import type {FunctionComponent, ReactNode} from "react";
import {array} from "../utils";

export const sections = array(
	["pages.home", "Domů"],
	["pages.aboutMe", "O mně", "about"],
	["pages.certificates", "Certifikáty", "certificates"],
	["pages.experience", "Zkušenosti", "experience"],
	["pages.services", "Služby", "services"],
	["pages.blog", "Blog", "blog"],
	["pages.contact", "Kontakt", "contact"],
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
				<div className="container-sm">
					<div className="title">
						<h2>{section[1]}</h2>
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

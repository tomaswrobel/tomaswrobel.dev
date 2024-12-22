import {readdir} from "fs/promises";
import type {MDXComponents} from "mdx/types";
import type {StaticImageData} from "next/image";
import type {ComponentType} from "react";

export interface FrontMatter {
	img: StaticImageData;
	date: Date;
	name: string;
	id?: string;
	updated?: Date;
	description: string;
	author: "Programming Hub" | "SoloLearn" | "freeCodeCamp" | "Tomáš Wróbel";
}

export type Author = FrontMatter["author"];

export interface Data {
	updated?: Date;
	id: string;
	img: StaticImageData;
	name: string;
	author?: string;
	date: Date;
	url: string;
}

export interface Props {
	params: Promise<Props.Params>;
}

export declare namespace Props {
	interface Params {
		id: string;
	}
}

export interface MDX extends FrontMatter {
	default: ComponentType<{components?: MDXComponents}>;
}

export async function data(kind: "blog" | "certificates") {
	const data: Data[] = [];

	for (const id of await readdir(`app/${kind}/posts`)) {
		const {default: _, ...json}: MDX = await import(`../${kind}/posts/${id}`);

		data.push({
			id,
			...json,
			url: `/${kind}/${id}/`,
		});
	}

	return data.sort((a, b) => b.date.getTime() - a.date.getTime());
}

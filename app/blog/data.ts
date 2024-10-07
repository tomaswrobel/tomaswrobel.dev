import {readdir} from "fs/promises";
import type {Post} from "blog/posts";
import type Paginated from "components/paginated";

export default async function data() {
	const data: Paginated.Data[] = [];

	for (const id of await readdir("app/blog/posts")) {
		const {default: _, ...json}: Post = await import(`./posts/${id}`);

		data.push({
			...json,
			id,
			author: "Tomáš Wróbel",
			url: `/blog/${id}/`
		});
	}

	return data.sort((a, b) => b.date.getTime() - a.date.getTime());
}

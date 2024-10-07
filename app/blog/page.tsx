import type {Metadata} from "next";

import data from "./data";
import Paginated from "components/paginated";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Blog",
	description: "Blog about web development, programming, and other interesting topics."
};

export default async function Blog() {
	return <Paginated data={await data()} heading="Blog" />;
}

import type {Metadata} from "next";
import BlogListing from "components/blog-listing";
import {data} from "components/blog";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Blog",
	description: "Blog o webovém vývoji a programování.",
};

export default async function Blog() {
	return <BlogListing data={await data("blog")} heading="Blog" />;
}

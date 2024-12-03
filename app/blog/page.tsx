import type {Metadata} from "next";
import BlogListing from "components/blog-listing";
import {data} from "components/blog";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Blog",
	description: "Blog about web development, programming, and other interesting topics.",
};

export default async function Blog() {
	return <BlogListing data={await data("blog")} heading="Blog" />;
}

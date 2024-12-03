import type {Metadata} from "next";
import BlogListing from "components/blog-listing";
import {data} from "components/blog";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Certificates",
	description: "Certificates from various online courses and workshops.",
};

export default async function Certificates() {
	return <BlogListing data={await data("certificates")} heading="My certificates" />;
}

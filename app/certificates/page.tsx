import type {Metadata} from "next";
import BlogListing from "components/blog-listing";
import {data} from "components/blog";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Certifikáty",
	description: "Stránka s mými certifikáty a diplomy, které jsem získal během svého studia a praxe.",
};

export default async function Certificates() {
	return <BlogListing data={await data("certificates")} heading="Moje certifikáty" />;
}

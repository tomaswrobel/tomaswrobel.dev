import type {MetadataRoute} from "next";
import data from "blog/data";

type Sitemaps = Promise<MetadataRoute.Sitemap>;
type Sitemap = MetadataRoute.Sitemap[number];

export default async function sitemap(): Sitemaps {
	const blog = await data();

	return [
		{
			lastModified: new Date(2024, 8, 25),
			url: "https://tomaswrobel.dev",
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			lastModified: new Date(2024, 5, 1),
			url: "https://tomaswrobel.dev/certificates",
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			lastModified: blog[0].date,
			url: "https://tomaswrobel.dev/blog",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		...blog.map<Sitemap>(
			post => ({
				lastModified: post.date,
				url: `https://tomaswrobel.dev/blog/${post.id}`,
				changeFrequency: "never",
				priority: 0.5
			})
		),
	];
}

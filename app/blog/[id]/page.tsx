import BlogSingle from "components/blog-single";
import type {Metadata} from "next/types";
import type {Props, FrontMatter} from "components/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
	const {readdir} = await import("fs/promises");
	const array = await readdir("app/blog/posts");
	return array.map<Props.Params>(id => ({id}));
}

export async function generateMetadata({params}: Props) {
	const {id} = await params;
	const {name, description, date, img, updated = date}: FrontMatter = await import(`../posts/${id}`);

	const metadata: Metadata = {
		title: `Tomáš Wróbel | ${name}`,
		description,
		openGraph: {
			type: "article",
			images: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}${img.src}`,
			publishedTime: date.toISOString(),
			modifiedTime: updated.toISOString(),
			authors: "Tomáš Wróbel",
			description,
			url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/blog/${id}`,
		},
	};

	return metadata;
}

export default async function Blog({params}: Props) {
	return <BlogSingle module={await import(`../posts/${(await params).id}`)} />;
}

import "highlight.js/scss/monokai-sublime.scss";
import BlogSingle from "components/blog-single";
import type {Metadata} from "next";
import type {Props, FrontMatter, MDX} from "components/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
	const {readdir} = await import("fs/promises");
	const array = await readdir("app/blog/posts");
	return array.map<Props.Params>(id => ({id}));
}

export async function generateMetadata({params}: Props) {
	const {name, description, date, img}: FrontMatter = await import(`../posts/${params.id}`);

	const metadata: Metadata = {
		title: `Tomáš Wróbel | ${name}`,
		description,
		openGraph: {
			type: "article",
			images: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}${img.src}`,
			publishedTime: date.toISOString(),
			authors: "Tomáš Wróbel",
			description,
			url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/blog/${params.id}`,
		},
	};

	return metadata;
}

export default async function Blog({params}: Props) {
	return <BlogSingle module={await import(`../posts/${params.id}`)} />;
}

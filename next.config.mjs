import rehypeHighlight from "rehype-highlight";
import withMDX from "@next/mdx";

export default withMDX({
	options: {
		rehypePlugins: [rehypeHighlight],
	},
})({
	pageExtensions: [
		"js",
		"jsx",
		"ts",
		"tsx",
		"md",
		"mdx",
	],
});

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
	images: {
		qualities: [
			100
		]
	},
	/**
	 * @param {import("webpack").Configuration} config 
	 */
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule?.test?.test?.('.svg'));

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {not: [...fileLoaderRule.resourceQuery.not, /url/]}, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			},
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
});

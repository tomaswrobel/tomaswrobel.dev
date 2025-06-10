import type {MDXComponents} from "mdx/types";
import Icon from "./app/components/fa-icon";
import Button from "./app/components/button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		Button,
		Icon,
	};
}

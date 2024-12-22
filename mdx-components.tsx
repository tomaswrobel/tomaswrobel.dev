import type {MDXComponents} from "mdx/types";
import Icon from "components/fa-icon";
import Button from "components/button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		Button,
		Icon
	};
}

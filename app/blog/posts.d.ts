import {MDXComponents} from "mdx/types";
import {ComponentType} from "react";

export interface FrontMatter {
    img: string;
    date: Date;
    name: string;
    description: string;
}

export interface Post extends FrontMatter {
    default: ComponentType<{components?: MDXComponents}>;
}
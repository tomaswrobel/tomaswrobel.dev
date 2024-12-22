import type {MDXComponents} from "mdx/types";
import type {StaticImageData} from "next/image";
import type {ComponentType} from "react";

export interface FrontMatter {
    img: StaticImageData;
    date: Date;
    name: string;
    description: string;
}

export interface Post extends FrontMatter {
    default: ComponentType<{components?: MDXComponents}>;
}
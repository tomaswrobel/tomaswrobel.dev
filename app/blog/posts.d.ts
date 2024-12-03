import {MDXComponents} from "mdx/types";
import {StaticImageData} from "next/image";
import {ComponentType} from "react";

export interface FrontMatter {
    img: StaticImageData;
    date: Date;
    name: string;
    description: string;
}

export interface Post extends FrontMatter {
    default: ComponentType<{components?: MDXComponents}>;
}
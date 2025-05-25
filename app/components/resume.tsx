import type {ImageProps} from "next/image";
import Image from "next/image";
import type {FunctionComponent, PropsWithChildren, ReactNode} from "react";

export const Resume: FunctionComponent<PropsWithChildren> = ({children}) => (
	<div className="resume-row">
		<div className="row">{children}</div>
	</div>
);

export const ResumeImage: FunctionComponent<ImageProps> = props => (
	<div className="col-sm-3 col-md-3 col-xl-2">
		<div className="rb-left">
			<Image draggable={false} loading="lazy" {...props} />
		</div>
	</div>
);

export const ResumeText: FunctionComponent<Record<"children" | "title" | "subtitle" | "label", ReactNode>> = ({
	children,
	title,
	subtitle,
	label,
}) => (
	<div className="col-sm-9 col-md-9 col-xl-10">
		<div className="rb-right">
			<h4>{title}</h4>
			<label>{subtitle}</label>
			<div className="rb-time">{label}</div>
			<p>{children}</p>
		</div>
	</div>
);

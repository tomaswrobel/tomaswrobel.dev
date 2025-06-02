import type {ImageProps} from "next/image";
import Image from "next/image";
import type {FunctionComponent, PropsWithChildren, ReactNode} from "react";

export const Resume: FunctionComponent<PropsWithChildren> = ({children}) => (
	<div>
		<div className="row">{children}</div>
	</div>
);

export const ResumeImage: FunctionComponent<ImageProps> = props => (
	<div className="col-sm-3 col-md-3 col-xl-2">
		<div className="resume-box-left">
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
		<div className="resume-box-right">
			<h4>{title}</h4>
			<span className="resume-box-label">{subtitle}</span>
			<div className="resume-box-time">{label}</div>
			<p>{children}</p>
		</div>
	</div>
);

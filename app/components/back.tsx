"use client";
import {useRouter} from "next/navigation";
import {FunctionComponent} from "react";
import Icon from "./fa-icon";

const Back: FunctionComponent = () => {
	const router = useRouter();

	return (
		<a
			href="#"
			className="back-link"
			onClick={e => {
				e.preventDefault();
				router.back();
			}}
		>
			<Icon name="arrow-left" style="solid" label="Go back" />
		</a>
	);
};

export default Back;

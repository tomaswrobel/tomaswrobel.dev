import type {FunctionComponent, PropsWithChildren} from "react";
import Icon from "./fa-icon";

const Button: FunctionComponent<Button.Props> = ({children, to, icon}) => (
	<a className="btn" href={to}>
		{icon && <Icon {...icon} />}
		{children}
	</a>
);

declare namespace Button {
	interface Props extends PropsWithChildren {
		to: string;
		icon?: Icon.Props;
	}
}

export default Button;

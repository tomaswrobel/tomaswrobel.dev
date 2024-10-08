import type {IconName, IconStyle} from "@fortawesome/fontawesome-common-types";
import type {FunctionComponent} from "react";

const Icon: FunctionComponent<Icon.Props> = ({name, style, label}) => (
	<i role="img" className={`fa${style[0]} fa-${name}`} aria-label={label} />
);

declare namespace Icon {
	interface Props {
		name: IconName;
		style: IconStyle;
		label?: string;
	}
}

export default Icon;
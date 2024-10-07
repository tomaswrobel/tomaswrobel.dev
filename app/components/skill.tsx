import type {FunctionComponent} from "react";

const Skill: FunctionComponent<Skill.Props> = ({name, level}) => (
	<div className="skill-lt">
		<h6>{name}</h6>
		<div className="skill-bar">
			<div className="skill-bar-in" style={{width: level}}>
				<span title={level} />
			</div>
		</div>
	</div>
);

declare namespace Skill {
	export interface Props {
		name: string;
		level: `${number}%`;
	}
}

export default Skill;

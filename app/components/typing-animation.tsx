"use client";
import {useRef, type FunctionComponent, useEffect} from "react";
import Typed from "typed.js";

const TypingAnimation: FunctionComponent<TypingAnimation.Props> = ({strings}) => {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const typed = new Typed(ref.current!, {
			strings,
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 100,
			smartBackspace: true,
			loop: true,
			showCursor: true,
		});

		return function () {
			typed.destroy();
		};
	}, [strings]);

	return <span id="type-it" className="subtitle subtitle-typed" translate="no" aria-label={strings[0]} ref={ref} />;
};

declare namespace TypingAnimation {
	export interface Props {
		strings: string[];
	}
}

export default TypingAnimation;

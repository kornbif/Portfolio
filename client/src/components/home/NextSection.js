import React from "react";
import {
	Container,
	Next,
	NextTitle,
	NextContentTitle,
	BorderBottom,
} from "../../styled/globalStyled";
import { NavHashLink } from "react-router-hash-link";

const NextSection = ({ onCursor, title, destination }) => {
	const textMotion = {
		rest: {
			transition: {
				duration: 2,
				type: "tween",
				ease: "easeIn",
			},
		},
		hover: {
			transition: {
				duration: 0.4,
				type: "tween",
				ease: "easeOut",
			},
		},
	};

	const borderMotion = {
		rest: { width: 0, ease: "easeOut", duration: 0.2, type: "tween" },
		hover: {
			width: "100%",
			transition: {
				duration: 0.4,
				type: "tween",
				ease: "easeIn",
			},
		},
	};

	return (
		<Container content>
			<NavHashLink
				to={destination ? destination : "/"}
				// onMouseEnter={() => onCursor("hovered")}
				// onMouseLeave={onCursor}
				activeClassName="nav-active"
				smooth
			>
				<Next
					initial="rest"
					whileHover="hover"
					animate="rest"
					onMouseEnter={() => onCursor("hovered")}
					onMouseLeave={onCursor}
				>
					<NextTitle>NEXT</NextTitle>
					<NextContentTitle svgWidth="142px">
						<NextTitle size="4em" bold variants={textMotion}>
							{title}
							<BorderBottom variants={borderMotion} />
						</NextTitle>
						<svg
							// width="142"
							height="24"
							viewBox="0 0 142 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect y="19.2668" width="142" height="4.61293" fill="black" />
							<rect
								width="28.4782"
								height="4.47805"
								transform="matrix(0.735753 0.67725 -0.618154 0.786057 120.768 0)"
								fill="black"
							/>
						</svg>
					</NextContentTitle>
				</Next>
			</NavHashLink>
		</Container>
	);
};

export default NextSection;

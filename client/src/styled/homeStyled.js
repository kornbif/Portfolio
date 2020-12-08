import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Banner = styled.div`
	position: relative;
	width: 90%;
	height: 100vh;
	max-height: 1024;
	padding: 5em 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 3em auto;
	color: ${({ theme }) => theme.text};

	.headline {
		width: 100%;

		display: flex;

		flex-direction: column;

		span,
		p {
			font-size: 1.2em;
		}
		p {
			margin-bottom: 2em;
		}

		.headline-text {
			position: relative;
			line-height: 0.3em;
			margin-bottom: 1.2em;

			h1 {
				position: relative;
				font-size: 5.5em;
				letter-spacing: 0.1em;
				z-index: 2;
			}
		}
	}
`;

export const BannerTitle = styled(motion.div)`
	position: absolute;
	top: 70px;
	left: 0;
	color: ${({ theme }) => theme.text};
	/* pointer-events: none; */
`;

export const Headline = styled(motion.h1)`
	display: block;
	font-size: ${(props) => (props.size ? props.size : "7.2em")};
	font-weight: ${(props) => (props.weight ? props.weight : "800")};
	line-height: 0.5;

	${(props) =>
		props.mont &&
		css`
			font-family: "Montserrat", sans-serif;
		`}
`;

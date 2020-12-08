import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const TitleContainer = styled(motion.div)`
	position: relative;
	display: inline-block;
	display: flex;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 0.3em 0;
	text-transform: uppercase;

	${(props) =>
		props.right &&
		css`
			justify-content: flex-end;
		`}
`;
export const Title = styled(motion.h1)`
	position: relative;
	font-weight: 300;
	letter-spacing: 0.2em;
	display: inline-block;
	color: ${({ theme }) => theme.text};
`;
export const TitleLined = styled(motion.span)`
	position: absolute;
	right: 0;
	top: 50%;
	transform: rotate(180deg);
	transform-origin: center right;
	width: 200px;
	height: 3px;
	background: ${({ theme }) => theme.text};

	${(props) =>
		props.right &&
		css`
			left: 0;
			transform-origin: center left;
		`}
`;

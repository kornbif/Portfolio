import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.header)`
	height: 0;
	width: 100%;
	position: fixed;
	top: 2em;
	right: 0;
	left: 0;
	z-index: 20;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.7em;
	font-weight: 700;
	color: ${({ theme }) => theme.text};
	letter-spacing: 0.1em;
	width: auto;
	height: 100%;

	.hide {
		display: inline-block;
		max-width: 0;
		opacity: 0;
		transition: max-width 0.2s, opacity 0.2s;
		margin-right: 0.5em;
	}

	&:hover {
		background: linear-gradient(
			270deg,
			rgba(${({ theme }) => theme.bgRGB}, 0.2) 0%,
			rgba(${({ theme }) => theme.textRGB}, 0.2) 100%
		);

		.hide {
			max-width: 180px;
			opacity: 1;
			transition: max-width 0.2s, opacity 0.2s;
		}
	}
`;

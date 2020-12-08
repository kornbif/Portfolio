import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { StyledIconBase } from "@styled-icons/styled-icon";

const shuffle = keyframes`
    0%{
     
        transform: translateY(0px);
   
       
    }
    100%{
     
        transform: translateY(-150px);
       

    }

`;

export const AboutContainer = styled.div`
	width: 90%;
	height: 100%;
	margin: 8em auto;
`;

export const ParagraphContent = styled.p`
	position: relative;

	width: 85%;
	height: auto;
	margin: 2em 0;
	font-size: 1.8em;
	letter-spacing: 0.2em;
	line-height: 1.5;
	font-family: "Montserrat", sans-serif;
	color: ${({ theme }) => theme.text};
`;

export const ShuffleWord = styled.div`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	width: auto;
	height: 50px;
	margin-left: 0.3em;
	font-weight: 500;
	padding: 0;
	margin: 0;
	transition: all 5s forwards;
	overflow-y: hidden;
`;
export const Word = styled.span`
	display: grid;
	align-items: center;
	height: 50px;
	width: auto;
	opacity: 1;
	animation: ${shuffle} 10s steps(3, end) 3s infinite;
	color: ${({ theme }) => theme.text};
`;

// Icon
export const IconContainer = styled.div`
	position: relative;
	width: auto;
	padding: 1em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: -2em;
`;

export const IconWrap = styled(motion.div)`
	color: ${({ theme }) => theme.text};
	margin: 1em 2em;
	display: inline-block;
	max-width: 50px;
`;

export const IconBox = styled.div`
	position: relative;
	width: auto;

	&:first-child {
		margin-right: 4em;
	}
	&:last-child {
		margin-left: 4em;
	}
`;

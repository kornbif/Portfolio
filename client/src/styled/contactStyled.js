import styled from "styled-components";

export const TextContent = styled.p`
	width: 45%;
	height: 100%;
	font-size: 64px;

	margin: 1em 0;
	letter-spacing: 0.2em;
	line-height: 1.2em;
	color: ${({ theme }) => theme.text};
`;

export const FormContent = styled.div`
	width: 45%;
	height: 100%;

	margin: 1em 0;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
`;

export const FormControl = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 1.2em;
	height: auto;
`;

export const Label = styled.label`
	margin-bottom: 0.4em;
	font-size: 1.2em;
	color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
	padding: 0.9em 1.4em;
	max-width: 90%;
	border: none;
	outline: none;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.watermarkText};
`;

export const TextArea = styled.textarea`
	padding: 0.9em 1.4em;
	max-width: 90%;
	height: 180px;
	max-height: 200px;
	overflow-x: hidden;
	overflow-y: auto;
	resize: none;
	border: none;
	outline: none;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.watermarkText};
`;

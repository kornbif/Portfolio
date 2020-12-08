import React from "react";
import ContactForm from "../components/ContactForm";
import HeaderTitle from "../components/HeaderTitle";
import { TextContent } from "../styled/contactStyled";
import { Container, Flex } from "../styled/globalStyled";

const Contact = () => {
	return (
		<Container>
			<Container id="#hire" content desk>
				<HeaderTitle>Get in Touch</HeaderTitle>
				<Flex spaceBetween>
					<TextContent>Let’s create and build new ideas together!</TextContent>
					<ContactForm />
				</Flex>
			</Container>
		</Container>
	);
};

export default Contact;

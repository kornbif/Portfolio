import React from "react";
import {
	Form,
	FormContent,
	FormControl,
	Input,
	Label,
	TextArea,
} from "../styled/contactStyled";
import { ButtonStyled } from "../styled/globalStyled";

const ContactForm = () => {
	return (
		<FormContent>
			<Form>
				<FormControl>
					<Label>Name</Label>
					<Input type="text" id="name" />
				</FormControl>
				<FormControl>
					<Label htmlFor="email">Email</Label>
					<Input type="text" id="email" />
				</FormControl>
				<FormControl>
					<Label htmlFor="message">Message</Label>
					<TextArea id="message" />
				</FormControl>
				<ButtonStyled width="90%">Submit</ButtonStyled>
			</Form>
		</FormContent>
	);
};

export default ContactForm;

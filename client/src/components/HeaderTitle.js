import React from "react";
import { TitleContainer, Title, TitleLined } from "../styled/titleStyled";

const HeaderTitle = ({ right, children }) => {
	return (
		<TitleContainer right={right}>
			<Title>
				{children}
				<TitleLined right={right}></TitleLined>
			</Title>
		</TitleContainer>
	);
};

export default HeaderTitle;

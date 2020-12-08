import React, { useEffect } from "react";
import Card from "../components/Card";
import HeaderTitle from "../components/HeaderTitle";

import { Container, WatermarkBox, WatermarkText } from "../styled/globalStyled";
import { PorjectContent, ProjectBox } from "../styled/projecStyled";

// COntext
import {
	useGlobalDispatchContext,
	useGlobalStateContext,
} from "../context/globalContext";

import { listProject } from "../context/actions/action/projectActions";

const Projects = ({ onCursor }) => {
	const { projectState } = useGlobalStateContext();
	const { projects } = projectState;
	const { projectDispatch } = useGlobalDispatchContext();

	useEffect(() => {
		listProject()(projectDispatch);
	}, [projectDispatch]);

	return (
		<Container>
			<PorjectContent id="projects">
				<HeaderTitle>PROJECTS</HeaderTitle>

				<ProjectBox>
					{projects &&
						projects.map((project, i) => (
							<Card
								key={project.id}
								number={("0" + i).slice(-2)}
								image={project.images}
								title={project.title}
								onCursor={onCursor}
							/>
						))}
				</ProjectBox>
			</PorjectContent>
			<WatermarkText top="10%" left="80%" size="12em">
				PROJECTS
			</WatermarkText>
			<WatermarkBox left="50%" top="10%" />
		</Container>
	);
};

export default Projects;

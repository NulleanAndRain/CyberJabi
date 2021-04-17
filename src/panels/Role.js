import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import {
	Div,
	Group,
	Card,
	Avatar,
	RichCell,
	PopoutWrapper,
	ScreenSpinner
} from "@vkontakte/vkui";
import teacher from '../icons/groups/teacher.png';
import parent from '../icons/groups/parent.png';
import student from '../icons/groups/student.png';
import './Role.css';
import './PanelRole.css';
import './CardRole.css';
import './RoleText.css';
const Role = props => (
	<Panel   id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Главная
		</PanelHeader>
		<div className="PanelRole">
			<Card className="CardRole"> <Avatar size="100%"  className="Role" src={teacher} onClick={props.go} data-to="home" alt="role teacher"/>
				<div className="RoleText"> Я учитель</div>
			</Card>
			<Card className="CardRole"> <Avatar size="100%" className="Role" src={parent} onClick={props.go} data-to="home" alt="role parent"/>
				<div className="RoleText"> Я родитель </div>
			</Card>
			<Card className="CardRole"> <Avatar size="100%" className="Role" src={student} onClick={props.go} data-to="home" alt="role student"/>
				<div className="RoleText"> Я ученик </div>
			</Card>

		</div>

	</Panel>
);

Role.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Role;

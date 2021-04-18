import React from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Div,
	Group,
	Card,
	Avatar
} from "@vkontakte/vkui";
import teacher from '../img/groups/teacher.png';
import parent from '../img/groups/parent.png';
import student from '../img/groups/student.png';
import logo from '../img/logo.png';
import './Role.css';
import './Common.css';
const Role = props => (
	<Panel id={props.id}>
		<div className='panelBox'>
			<img src={logo} className='logoSmall' />
			<div className='panelHeader roleHeader'>
				Кто Вы?
			</div>
			<div className="PanelRole">
				<Card className="CardRole" onClick={props.go} data-to="home">
					<Avatar size="100%" className="Role" src={teacher} alt="role teacher"/>
					<div className="RoleText"> Я учитель</div>
				</Card>
				<Card className="CardRole" onClick={props.go} data-to="home">
					<Avatar size="100%" className="Role" src={parent} alt="role parent"/>
					<div className="RoleText"> Я родитель </div>
				</Card>
				<Card className="CardRole" onClick={props.go} data-to="studentProfile">
					<Avatar size="100%" className="Role" src={student} alt="role student"/>
					<div className="RoleText"> Я ученик </div>
				</Card>
			</div>
		</div>
	</Panel>
);

Role.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Role;

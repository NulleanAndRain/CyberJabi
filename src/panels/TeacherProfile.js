import React from 'react';
import PropTypes from 'prop-types';

import {
  Div,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  CardScroll,
  Card,
  Avatar,
  RichCell,
} from "@vkontakte/vkui";

import './StudentProfile.css';
import './Common.css';
import froge from '../img/groups/frog.png';
import course0 from '../img/math.jpg';
import course1 from '../img/math2.jpg';

const TeacherProfile = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="role"/>}
		> 
			<div className = 'panelHeader'> Учитель </div>
		</PanelHeader>
		<Group>
			{props.fetchedUser &&
			<RichCell disabled
				className='profileCell'
				before={props.fetchedUser.photo_200? 
					<Avatar size={100} src={props.fetchedUser.photo_200}/>:
					<Avatar size={100} src={froge}/>
				}>
				<Div className="profileName"> {`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`} </Div>
				<Div className="profileStatus"> Жабная жабка </Div>
			</RichCell>}
			<button className="edit"> Редактировать </button>
		</Group>
		<Group>
			<CardScroll>
				<Card className="courseCardTeacher" onClick={props.go} data-to='teacherCourse'>
					<img className='courceImg' id="img0" src={course0} />
					<Div className='courseName'>
						Математика для новичков
					</Div>
				</Card>
				<Card className="courseCardTeacher" onClick={props.go} data-to='teacherCourse'>
					<img className='courceImg' id="img0" src={course1} />
					<Div className='courseName'>
						Дискретная математика
					</Div>
				</Card>

			</CardScroll>
		</Group>
	</Panel>
);

export default TeacherProfile;

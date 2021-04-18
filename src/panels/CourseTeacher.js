import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import courseIco from '../img/math.jpg';
import './Course.css';
import './Common.css';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import {Card, Input, Text, SimpleCell, CardScroll, List} from "@vkontakte/vkui";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

import {
	Icon16Dropdown,
	Icon16UserOutline,
	Icon16Location,
	Icon16CommentOutline,
	Icon20GearOutline,
	Icon56UserAddOutline,
	Icon36Add
} from '@vkontakte/icons'

import froge from '../img/groups/frog.png';
import persik from '../img/persik.png';
import student from '../img/groups/student.png';

const CourseTeacher = props => {
	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={props.go} data-to="studentProfile"/>}
			>
				<div className = 'panelHeader'> Математика для новичков </div>
			</PanelHeader>
			<Group>
				<Avatar size={72} className="Persik" src={courseIco} alt="Persik The Cat">
					<Icon20GearOutline className='inlineIcon customizeIco customizeAvatar' width={12} heigth={12}/>
				</Avatar>
				<Div>
					<Header>Математика для новичков </Header>
					<List className='course-text'>
						{props.fetchedUser &&
						<Text>
							<Icon16UserOutline className='inlineIcon'/>
							Преподаватель: {`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
							<Icon20GearOutline className='inlineIcon customizeIco' width={12} heigth={12}/>
						</Text>}
						<Text>
							<Icon16Location className='inlineIcon'/>
							Направленность: точные науки
							<Icon20GearOutline className='inlineIcon customizeIco' width={12} heigth={12}/>
						</Text>
						<Text>
							<Icon16CommentOutline className='inlineIcon'/>
							Здесь вы научитесь управлять интегралами и бросаться полиномами
							<Icon20GearOutline className='inlineIcon customizeIco' width={12} heigth={12}/>
						</Text>
					</List>
				</Div>
			</Group>
			<Group>
				<Div>
					Начало курса: <Input type='date' value={'2021-01-01'} />
					Длительность курса в неднлях <Input type='number' value={16} />
				</Div>
			</Group>
			<Group header={<Header>Ученики</Header>}>
				<CardScroll size='s'>
					<Card className='centringCard'
						style={{ width: '30%', backgroundColor: 'transparent' }}>
						<Avatar size={150}>
							<Icon56UserAddOutline />
						</Avatar>
					</Card>
					{props.fetchedUser && props.fetchedUser.photo_200 &&
					<Card className='centringCard'
						style={{width: '30%', backgroundColor: 'transparent' }}>
						<Avatar size={150}  src={props.fetchedUser.photo_200} />
					</Card>}
					<Card className='centringCard'
						style={{width: '30%', backgroundColor: 'transparent' }}>
						<Avatar size={150}  src={froge} />
					</Card>
					<Card className='centringCard'
						style={{width: '30%', backgroundColor: 'transparent' }}>
						<Avatar size={150}  src={persik} />
					</Card>
					<Card className='centringCard'
						style={{backgroundColor: 'transparent' }}>
						<Avatar size={150}  src={student} />
					</Card>
					<Div></Div>
					<Div></Div>
					<Div></Div>
					<Div></Div>
				</CardScroll>
			</Group>
			<Group header={<Header>Задания</Header>}>
				<CardScroll size='s'>
					<Card mode="outline" style={{ padding: 10, width: '30%' }} className="centringCard">
						<div style={{ height: 142 }} >
							<Icon36Add style={{marginTop: 'auto', marginBottom: 'auto'}} />
						</div>
					</Card>
					<Card mode="outline" style={{ padding: 10, width: '30%' }} className="course-card">
						<div style={{ height: 142 }} >
							<Text>Дата: 1.03.2021</Text>
							<Text>Время: 11:00</Text>
							<Text>Тема: Производная</Text>
							<Text>Задание: Изучить параграф 2, решить задание 24</Text>
							<Text>Баллы за урок: 10</Text>
						</div>
					</Card>
					<Card mode="outline" style={{padding: 10, width: '30%'}} className="course-card">
						<div style={{  height: 126  }} >
							<Text>Дата: 8.03.2021</Text>
							<Text>Время: 11:00</Text>
							<Text>Тема: Интеграл</Text>
							<Text>Задание: Изучить параграф 3, решить задания 36, 37, 38</Text>
							<Text>Баллы за урок: 8</Text>
						</div>
					</Card>
					<Card mode="outline" style={{padding: 10, width: '30%'}} className="course-card">
						<div style={{  height: 142 }} >
							<Text>Дата: 15.03.2021</Text>
							<Text>Время: 11:00</Text>
							<Text>Тема: Логарифм</Text>
							<Text>Задание: Изучить параграф 4, решить задание 42</Text>
							<Text>Баллы за урок: -</Text>
						</div>
					</Card>
				</CardScroll>
			</Group>
		</Panel>
	);
}

CourseTeacher.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CourseTeacher;

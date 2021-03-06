import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import persik from '../img/math.jpg';
import './Course.css';
import './Common.css';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import {Card, CardGrid, Progress, Tabs, TabsItem, Text, SimpleCell, CardScroll, List} from "@vkontakte/vkui";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

import {
	Icon16Dropdown,
	Icon16UserOutline,
	Icon16Location,
	Icon16CommentOutline
} from '@vkontakte/icons'

import bage from '../img/ach/svg/granit.svg';
import miniFrog1 from '../img/icons/checkFrog3.png';
import miniFrog2 from '../img/icons/checkFrog4.png';

const CourseStudent = props => {
	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={props.go} data-to="studentProfile"/>}
			>
				<div className = 'panelHeader'> Математика для новичков </div>
			</PanelHeader>
			<Group className="course-header">
				<Avatar size={72} className="Persik" src={persik} alt="Persik The Cat"/>
				<Div>
					<Header>Математика для новичков </Header>
					<List className='course-text'>
						<Text>
							<Icon16UserOutline className='inlineIcon'/>
							Преподаватель: Иммануил Гедеонович
						</Text>
						<Text>
							<Icon16Location className='inlineIcon'/>
							Направленность: точные науки
						</Text>
						<Text>
							<Icon16CommentOutline className='inlineIcon'/>
							Здесь вы научитесь управлять интегралами и бросаться полиномами
						</Text>
					</List>
				</Div>
				<div className="course-badge">
					<Avatar size={72} src={bage} alt="Persik The Cat"/>
					<Text>
						Поедатель гранита
					</Text>
				</div>
			</Group>
			<Group className="course-header-2">
				<Header>
					Прогресс курса: 4/10 недель
				</Header>
				<Div className='progressWide'>
					<div className='progressWrapper progressWide' id="progress2">
						<div className="checkFrog" id='checkFrog2' style={{left:'40%'}}>
							<img src={miniFrog1} />
							<img src={miniFrog2} />
						</div>
					</div>
				</Div>
				<Div>
					<Header className="course-score">Баллы за курс: 69</Header>
				</Div>
			</Group>
			<Group className="course-header">
				<CardGrid className='tasks'>
					<Card size="l" mode="outline" style={{ padding: 10, width: '28%' }} className="course-card">
						<div style={{ height: 142 }} >
							<Button style={{ marginTop: 10, float: 'right', opacity: 0.8}} mode="commerce" disabled >Сдано</Button>
							<Text>Дата: 1.03.2021</Text>
							<Text>Время: 11:00</Text>
							<Text>Тема: Производная</Text>
							<Text>Задание: Изучить параграф 2, решить задание 24</Text>
							<Text>Баллы за урок: 10</Text>
						</div>
					</Card>
					<Card size="l" mode="outline" style={{padding: 10, width: '28%'}} className="course-card">
						<div style={{  height: 126  }} >
							<Button style={{ marginTop: 10, float: 'right', opacity: 0.8}} mode="commerce" disabled >Сдано</Button>
							<Text>Дата: 8.03.2021</Text>
							<Text>Время: 11:00</Text>
							<Text>Тема: Интеграл</Text>
							<Text>Задание: Изучить параграф 3, решить задания 36, 37, 38</Text>
							<Text>Баллы за урок: 8</Text>
							<Avatar className="" size={36} src={bage} alt="Persik The Cat"/>
							<Button style={{ marginTop: -20, float: 'right'}}>Поделиться</Button>
						</div>
					</Card>
					<Card size="m" mode="outline" style={{padding: 10, width: '28%'}} className="course-card">
						<div style={{  height: 142 }} >
							<Text>Дата: 15.03.2021</Text>
							<Text>Время: 11:00</Text>
							<Text>Тема: Логарифм</Text>
							<Text>Задание: Изучить параграф 4, решить задание 42</Text>
							<Text>Баллы за урок: -</Text>
						</div>
					</Card>
				</CardGrid>
			</Group>
		</Panel>
	);
}

CourseStudent.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CourseStudent;

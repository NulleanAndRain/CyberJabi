import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import persik from '../img/persik.png';
import './Persik.css';
import './Common.css';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import {Card, CardGrid, Progress, Tabs, TabsItem, Text, CardScroll} from "@vkontakte/vkui";
import {Icon16Dropdown} from "@vkontakte/icons";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const BADGE_LINK = 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-49893413.jpg'
const Persik = props => {


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
					<Text className="course-text">Преподаватель: Иммануил Гедеонович</Text>
					<Text className="course-text">Направленность: точные науки</Text>
					<Text className="course-text">Здесь вы научите управлять интегралами и бросаться полиномами</Text>
				</Div>
				<Avatar className="course-badge" size={72} src={BADGE_LINK} alt="Persik The Cat"/>
			</Group>
			<Group className="course-header-2">
				<Header>
					Прогресс курса: 4/10 недель
				</Header>
				<Div>
					<Progress value={40} />
				</Div>
				<Div>
					<Header className="course-score">Баллы за курс: 69</Header>
				</Div>
			</Group>
			<Group className="course-header">
				<CardGrid>
					<Card size="l" mode="outline" style={{ padding: 10, width: '30%' }} className="course-card">
						<div style={{ height: 142 }} >
							<Button style={{ marginTop: 10, float: 'right', opacity: 0.8}} mode="commerce" disabled >Сдано</Button>
							<Text>Дата: 1.03.2021</Text>
							<Text>Время: 11:00</Text>
							<Text>Тема: Производная</Text>
							<Text>Задание: Изучить параграф 2, решить задание 24</Text>
							<Text>Баллы за урок: 10</Text>
						</div>
					</Card>
					<Card size="l" mode="outline" style={{padding: 10, width: '30%'}} className="course-card">
						<div style={{  height: 126  }} >
							<Button style={{ marginTop: 10, float: 'right', opacity: 0.8}} mode="commerce" disabled >Сдано</Button>
							<Text>Дата: 8.03.2021</Text>
							<Text>Время: 11:00</Text>
							<Text>Тема: Интеграл</Text>
							<Text>Задание: Изучить параграф 3, решить задания 36, 37, 38</Text>
							<Text>Баллы за урок: 8</Text>
							<Avatar className="" size={36} src={BADGE_LINK} alt="Persik The Cat"/>
							<Button style={{ marginTop: -20, float: 'right'}}>Поделиться</Button>
						</div>
					</Card>
					<Card size="m" mode="outline" style={{padding: 10, width: '30%'}} className="course-card">
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

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import persik from '../img/persik.png';
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

import achGranit from '../img/ach/svg/granit.svg';
import achSigner from '../img/ach/svg/signer.svg';
import achArtist from '../img/ach/svg/malevich.svg';

const CourseParent = props => {
	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={props.go} data-to="parentProfile"/>}
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
					<Avatar size={72} src={achGranit} alt="Persik The Cat"/>
					<Text>
						Поедатель гранита
					</Text>
				</div>
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
				<CardScroll>
					<Card className='advancementCard'>
						<img size={150} src={achGranit} alt="Persik The Cat"/>
						<Text className='advancementTitle'>
							Поедатель гранита
						</Text>
						<Text className='advancementDate'>
							10.10.2077
						</Text>
						<Text className='advancementDescr'>
							В совершенстве подготовился к уроку
						</Text>
					</Card>
					<Card className='advancementCard'>
						<img size={150} src={achSigner} alt="Persik The Cat"/>
						<Text className='advancementTitle'>
							Певец
						</Text>
						<Text className='advancementDate'>
							01.02.2021
						</Text>
						<Text className='advancementDescr'>
							Без запинки и с выражением рассказал стихи
						</Text>
					</Card>
					<Card className='advancementCard'>
						<img size={150} src={achArtist} alt="Persik The Cat"/>
						<Text className='advancementTitle'>
							Художник
						</Text>
						<Text className='advancementDate'>
							05.12.2020
						</Text>
						<Text className='advancementDescr'>
							Превзошел квадрат Малевича
						</Text>
					</Card>
				</CardScroll>
			</Group>
			<Div className='_pad'>.</Div>
		</Panel>
	);
}

CourseParent.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CourseParent;

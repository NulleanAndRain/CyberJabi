import React from 'react';
import PropTypes from 'prop-types';

import { Icon48AddAwardOutline } from '@vkontakte/icons';
import {
	Div,
	Panel,
	Header,
	PanelHeader,
	PanelHeaderBack,
	Group,
	CardScroll,
	Card,
	Avatar,
	RichCell, CardGrid, Text,
} from "@vkontakte/vkui";

import './StudentProfile.css';
import './Common.css';
import froge from '../img/groups/frog.png';
import course0 from '../img/math.jpg';
import course1 from '../img/courses/image2.png';
import course2 from '../img/courses/image3.png';
import course3 from '../img/courses/3dsMax.png';
import miniFrog1 from '../img/icons/checkFrog3.png';
import miniFrog2 from '../img/icons/checkFrog4.png';
import direction from "../img/direction.png";
import diagram from "../img/diagram.png";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import bage from "../img/ach/svg/granit.svg";

const StudentFromTeacher = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="teacherCourse"/>}
		> 
			<div className = 'panelHeader'> Ученик </div>
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
				<Card size="l" mode="outline" style={{ padding: 10, width: '28%', height: 200}} className="course-card">
					<div style={{ height: 142 }} >
						<Button style={{ marginTop: 10, float: 'right', opacity: 0.8}} mode="commerce" disabled >Сдано</Button>
						<Text>Дата: 1.03.2021</Text>
						<Text>Время: 11:00</Text>
						<Text>Тема: Производная</Text>
						<Text>Задание: Изучить параграф 2, решить задание 24</Text>
						<Text>Баллы за урок: 10</Text>
						<div className='addBage'>
							<Icon48AddAwardOutline className='addSticker' fill='#4bb34b'></Icon48AddAwardOutline>
						</div>
					</div>
				</Card>
				<Card size="l" mode="outline" style={{padding: 10, width: '28%', height: 200}} className="course-card">
					<div style={{  height: 126  }} >
						<Button style={{ marginTop: 10, float: 'right', opacity: 0.8}} mode="commerce" disabled >Сдано</Button>
						<Text>Дата: 8.03.2021</Text>
						<Text>Время: 11:00</Text>
						<Text>Тема: Интеграл</Text>
						<Text>Задание: Изучить параграф 3, решить задания 36, 37, 38</Text>
						<Text>Баллы за урок: 8</Text>
						<div class='addBage'>
							<Icon48AddAwardOutline className='addSticker' fill='#4bb34b'></Icon48AddAwardOutline>
							<Avatar className="" size={36} src={bage} alt="Persik The Cat"/>
						</div>
					</div>
				</Card>
				<Card size="m" mode="outline" style={{padding: 10, width: '28%', height: 200}} className="course-card">
					<div style={{  height: 142 }} >
						<Button style={{ marginTop: 10, float: 'right', opacity: 0.8, paddingLeft: 7, paddingRight: 7}} mode="commerce" disabled >Принять</Button>
						<Text>Дата:</Text>
						<Text> 15.03.2021</Text>
						<Text>Время: 11:00</Text>
						<Text>Тема: Логарифм</Text>
						<Text>Задание: Изучить параграф 4, решить задание 42</Text>
						<Text>Баллы за урок: -</Text>
						<div className='addBage'>
							<Icon48AddAwardOutline className='addSticker' fill='#4bb34b'></Icon48AddAwardOutline>
						</div>
					</div>
				</Card>
			</CardGrid>
		</Group>
		<Group>
			<Card className="direction">
				<div className="directionImgText">
					<img className="directionImg" src={direction}></img>
					<div>Направленность ребёнка</div>
				</div>
				<div className="directionDiagramBlock">
					<img className="directionDiagram" src={diagram}></img>
					<div className="diagramColourBlocks">
						<div className="colourBlock">
							<div className="diagramColour" id="art"></div>
							<div className="diagramText"> Художественная</div>
						</div>
						<div className="colourBlock">
							<div className="diagramColour" id="naturalScience"></div>
							<div className="diagramText"> Естественнонаучная</div>
						</div>
						<div className="colourBlock">
							<div className="diagramColour" id="socialHumanitarian"></div>
							<div className="diagramText"> Социально-гуманитарная</div>
						</div>
						<div className="colourBlock" >
							<div className="diagramColour" id="sport"></div>
							<div className="diagramText"> Физкультурно-спортивная</div>
						</div>
						<div className="colourBlock" >
							<div className="diagramColour" id="technical"></div>
							<div className="diagramText"> Техническая</div>
						</div>
					</div>
				</div>
			</Card>
		</Group>
		<Group>
			<CardScroll>
				<Card className="courseCard" onClick={props.go} data-to='studentCourse'>
					<img className='courceImg' id="img0" src={course0} />
					<Div className='courseName'>
						Математика для новичков
					</Div>
					<div className='progressWrapper' id="progress0">
						<div className="checkFrog" id='checkFrog0'>
							<img src={miniFrog1} />
							<img src={miniFrog2} />
						</div>
					</div>
					<div className="weeks" > 4 недели из 10 </div>
					<div className="scores" > 69 баллов </div>
				</Card>
				<Card className="courseCard">
					<img className='courceImg' id="img1" src={course1} />
					<Div className='courseName'>
						Курс по CSS
					</Div>
					<div className='progressWrapper' id="progress1">
						<div className="checkFrog" id='checkFrog1'>
							<img src={miniFrog1} />
							<img src={miniFrog2} />
						</div>
					</div>

					<div className="weeks" > 7 недель из 40 </div>
					<div className="scores" > 40 баллов </div>
				</Card>
				<Card className="courseCard">
					<img className='courceImg' id="img2" src={course2} />
					<Div className='courseName'>
						Работа в Figma
					</Div>
					<div className='progressWrapper' id="progress2">
						<div className="checkFrog" id='checkFrog2'>
							<img src={miniFrog1} />
							<img src={miniFrog2} />
						</div>
					</div>
					<div className="weeks"> 27 недель из 40 </div>
					<div className="scores" > 230 баллов </div>
				</Card>
				<Card className="courseCard">
					<img className='courceImg'  src={course3} />
					<Div className='courseName'>
						Курс 3D моделирования
					</Div>
					<div className='progressWrapper' id="progress3">
						<div className="checkFrog" id='checkFrog3'>
							<img src={miniFrog1} />
							<img src={miniFrog2} />
						</div>
					</div>
					<div className="weeks" > 38 недель из 40 </div>
					<div className="scores" > 478 баллов</div>
				</Card>
			</CardScroll>
		</Group>
	</Panel>
);

export default StudentFromTeacher;

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
	RichCell, Text,
} from "@vkontakte/vkui";

import './StudentProfile.css';
import './ParentProfile.css';
import './Common.css';
import froge from '../img/groups/frog.png';
import course0 from '../img/math.jpg';
import course1 from '../img/courses/image2.png';
import course2 from '../img/courses/image3.png';
import course3 from '../img/courses/3dsMax.png';
import miniFrog1 from '../img/icons/checkFrog3.png';
import miniFrog2 from '../img/icons/checkFrog4.png';
import diagram from '../img/diagram.png';
import direction from '../img/direction.png';
import achCyber from "../img/ach/svg/cyberjaba.svg";
import achGranit from "../img/ach/svg/granit.svg";
import achSigner from "../img/ach/svg/signer.svg";
import achArtist from "../img/ach/svg/malevich.svg";

const ParentProfile = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="role"/>}
		> 
			<div className = 'panelHeader'> Родитель </div>
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
				<Card className="courseCard" onClick={props.go} data-to='parentCourse'>
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
		<Group className="course-header">
			<CardScroll>
				<Card className='advancementCard'>
					<img size={150} src={achCyber} alt="Persik The Cat"/>
					<Text className='advancementTitle'>
						Кибержаба
					</Text>
					<Text className='advancementDate'>
						06.06.2077
					</Text>
					<Text className='advancementDescr'>
						Компьютер - твой лучший друг
					</Text>
				</Card>
				<Card className='advancementCard'>
					<img size={150} src={achGranit} alt="Persik The Cat"/>
					<Text className='advancementTitle'>
						Поедатель гранита
					</Text>
					<Text className='advancementDate'>
						10.03.2021
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
	</Panel>
);

export default ParentProfile;

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
import './ParentProfile.css';
import './Common.css';
import froge from '../img/groups/frog.png';
import course1 from '../img/image2.png';
import course2 from '../img/image3.png';
import course3 from '../img/3dsMax.png';
import roadmap from '../img/roadmap.png';
import miniFrog1 from '../img/checkFrog3.png';
import miniFrog2 from '../img/checkFrog4.png';
import diagram from '../img/diagram.png';
import direction from '../img/direction.png';

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
				<Card className="courseCard">
					<img className='courceImg' id="img1" src={course1} />
					<Div className='courseName'>
						Курс по CSS
					</Div>
					<div className='progressWrapper' id="progress1">
						{/*<div className='courseProgressBack'>
							<div className='courseProgressBack'></div>
						</div>*/}
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
		<Group>
			<img className='roadmap' src={roadmap} />
		</Group>
	</Panel>
);

export default ParentProfile;

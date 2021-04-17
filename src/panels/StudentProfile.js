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
import froge from '../img/groups/frog.png';
import frogeGlasses from '../img/frog_glasses.png'
import persik from '../img/persik.png';
import roadmap from '../img/roadmap.png';

const StudentProfile = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		> Ученик
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
			<CardScroll>
				<Card className="courseCard">
					<img className='courceImg' size={120} src={frogeGlasses} />
					<Div className='courseName'>
						course 1
					</Div>
					<div> 7/9 </div>
					{/*<div className='progressWrapper'>
						<div className='courseProgressBack'>
							<div className='courseProgressBack'></div>
						</div>
						7/9
					</div>*/}
				</Card>

				<Card className="courseCard">
					<img className='courceImg' size={120} src={persik} />
					<Div className='courseName'>
						course 2
					</Div>
					<div> 5/16 </div>
					{/*<div className='progressWrapper'>
						<div className='courseProgressBack'>
							<div className='courseProgressBack'></div>
						</div>
						7/9
					</div>*/}
				</Card>
			</CardScroll>
		</Group>
		<Group>
			<img className='roadmap' src={roadmap} />
		</Group>
	</Panel>
);

export default StudentProfile;

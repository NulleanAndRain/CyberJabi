import React from 'react';
import PropTypes from 'prop-types';
import {
  Div,
  Panel,
  Group,
  Card,
  Avatar,
  RichCell,
  PopoutWrapper,
  ScreenSpinner
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import froge from '../img/groups/frog.png';
import './LoadScreen.css';
import logo from '../img/logo.png';

const LoadScreen = () => (
	<Panel>
		<PopoutWrapper alignY="center" alignX="center" hasMask={false}>
			{/*<RichCell disabled
				before={<img size={144} src={froge} />}
				className='loadScreenCell'>
				<Div className='loadScreenMainText'> FroggySchool </Div>
				<Div className='loadScreenBottomText'> Учись, играй, развивайся </Div>
			</RichCell>*/}
			<img className='logoLoadScreen' src={logo} />
		</PopoutWrapper>
	</Panel>
);

export default LoadScreen;

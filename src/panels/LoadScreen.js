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

import froge from '../icons/groups/frog.png';
import './LoadScreen.css';

const LoadScreen = () => (
	<Panel>
		<PopoutWrapper alignY="center" alignX="center" hasMask={false}>
			<RichCell disabled
				before={<Avatar mode='image' size={144} src={froge} />}
				className='loadScreenCell'>
				<Div className='loadScreenMainText'> ле гушька </Div>
				<Div className='loadScreenBottomText'> что-то про лягушатник </Div>
			</RichCell>
		</PopoutWrapper>
	</Panel>
);

export default LoadScreen;

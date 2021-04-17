import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Role from './panels/Role';
import LoadScreen from './panels/LoadScreen'
import StudentProfile from './panels/StudentProfile'
import ParentProfile from "./panels/ParentProfile";

const App = () => {
	const [activePanel, setActivePanel] = useState('role');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<LoadScreen />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Persik id='persik' go={go} />
					<Role id='role' go={go} />
					<StudentProfile id='studentProfile' go={go} fetchedUser={fetchedUser} />
					<ParentProfile id='parentProfile' go={go} fetchedUser={fetchedUser} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;

import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Role from './panels/Role';
import LoadScreen from './panels/LoadScreen';
import CourseStudent from './panels/CourseStudent';
import StudentProfile from './panels/StudentProfile';
import CourseParent from './panels/CourseParent';
import ParentProfile from "./panels/ParentProfile";
import TeacherProfile from "./panels/TeacherProfile";
import StudentFromTeacher from "./panels/StudentFromTeacher";
import CourseTeacher from './panels/CourseTeacher';
const App = () => {
	const [activePanel, setActivePanel] = useState('studentFromTeacher');
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
					<CourseStudent id='studentCourse' go={go} />
					<Role id='role' go={go} />
					<StudentProfile id='studentProfile' go={go} fetchedUser={fetchedUser} />
					<CourseParent id='parentCourse' go={go} />
					<ParentProfile id='parentProfile' go={go} fetchedUser={fetchedUser} />
					<TeacherProfile id='teacherProfile' go={go} fetchedUser={fetchedUser} />
					<StudentFromTeacher id='studentFromTeacher' go={go} fetchedUser={fetchedUser} />
					<CourseTeacher id='teacherCourse' go={go} fetchedUser={fetchedUser} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;

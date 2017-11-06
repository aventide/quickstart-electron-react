import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AppContainer = styled.div`
	height: 100%;
`;

export class App extends React.Component {

	constructor(){
		super();
		this.state = {};
	}

	componentDidMount(){
		// add an example with axios
	}

	render() {
		return (
			<AppContainer>
				<h2>Electron app using ReactJS!</h2>
			</AppContainer>
		);
	}

}
import React, {Component} from 'react';

import logo from '.././logo.svg';
import './App.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Home from './Home/Home';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}


	render() {
		return (
      <>
      <Header />
      <Hero />
			<Home />
      </>
		);
	}
}

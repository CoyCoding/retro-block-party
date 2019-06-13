import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import logo from '.././logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

export default class App extends Component {
	constructor() {
		super();
		this.state = {

		};
	}


	render() {
		return (
      <Router>
				<Header />
				<Switch>
					<Route exact  path="/" component={Home}/>
					<Route component={NotFound}/>
				</Switch>
      </Router>
		);
	}
}

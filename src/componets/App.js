import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import logo from '.././logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Schedule from './Schedule/Schedule';
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			scheduleStatus: 'open'
		};
	};


	render() {
		return (
      <Router>
				<Header />
				<Switch>
					<Route exact  path="/" component={Home}/>
					<Route exact path="/schedule" render={props =>
						<Schedule {...props} scheduleStatus={this.state.scheduleStatus}/>
					}
						/>
					<Route component={NotFound}/>
				</Switch>
      </Router>
		);
	}
}

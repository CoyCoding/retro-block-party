import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import logo from '.././logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Schedule from './Schedule/Schedule';
import Apply from './Apply/Apply';



export default class App extends Component {
	constructor() {
		super();
		this.state = {
			scheduleStatus: 'takingApplications'

		};
		//this.scheduleStatusChange = this.scheduleStatusChange.bind(this);
	};

	scheduleStatusChange = (event) => {
			this.setState({
				scheduleStatus: event.target.value
			});
	};

	render() {
		return (
      <Router>
				<Header />
				<Switch>
					<Route exact  path="/" component={Home}/>
					<Route exact path="/schedule" render={props =>
						<Schedule {...props} scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>
					}
						/>
						<Route exact path="/apply" render={props =>
							<Apply {...props} scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>
						}
							/>
					<Route component={NotFound}/>
				</Switch>
      </Router>
		);
	}
}

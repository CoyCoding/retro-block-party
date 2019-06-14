import React, {Component} from 'react';
import './ApplicationsOpen.scss';
import {HrefLinks} from '../../.././Utils/HrefLinks';
import Checkbox from './Checkbox';
import axios from 'axios';
//These are temp values that should come from a DataBase for the checkboxes
const DATES = ['june 28', 'june 29'];
const TIMES = ['12:00 AM - 2:00 AM','2:00 AM - 4:00 AM','4:00 AM - 6:00 AM','6:00 AM - 8:00 AM','8:00 AM - 10:00 AM','10:00 AM - 12:00 PM','12:00 PM - 2:00 PM','2:00 PM - 4:00 PM','4:00 PM - 6:00 PM','6:00 PM - 8:00 PM','8:00 PM - 10:00 PM','10:00 PM - 12:00 AM'];


export default class ApplicationsOpen extends Component{
  constructor(props){
    super(props);
    //Set the value of the all the dates in the date array to false
    this.state={
      dates: DATES.reduce((dates,date)=>({
        ...dates,
        [date]: false
      }),
      {}
    ),
    //Set the value of the all the times in the date array to false
    times: TIMES.reduce((times, time)=>({
      ...times,
      [time]: false
    }),
    {}
  ),
  textFields: {},
  backup: ''
  };
}

  handleTextChange = (event) => {
  const name = event.target.name;

  this.setState({
      textFields: {
        ...this.state.textFields,
        [name]: event.target.value
      }

    },
    () => {
      console.log(this.state)
    })
}

  handleDateChange = (event) => {
        const name = event.target.name;

        this.setState({
            dates: {
              ...this.state.dates,
              [name]: !this.state.dates[name]
            }

          },
          () => {
            Object.keys(this.state.dates)
              .filter(date => this.state.dates[date])
              .forEach(date => {
                console.log(date, "is selected.");
              });
          })
      }

  handleTimeChange = (event) =>{
        const name  = event.target.name;

        this.setState({
            times:{
              ...this.state.times,
              [name]: !this.state.times[name]
            }
        },
        ()=>{Object.keys(this.state.times)
          .filter(time => this.state.times[time])
          .forEach(time => {
            console.log(time, "is selected.");
          })
        })
      }

  handleBackupChange = (event) =>{
    const name  = event.target.name;

    this.setState({
        backup: !this.state.backup

    },
    ()=>{Object.keys(this.state.times)
      .filter(time => this.state.times[time])
      .forEach(time => {
        console.log(time, "is selected.");
      })
    })
  }

  handleSubmit = (submitEvent) =>{
    submitEvent.preventDefault();
    const data = this.state;
    axios.post('/apply', {data}).then(function(res){
      console.log(res)
    });
  }

  createDateCheckbox = date => (
        <Checkbox
          label={date}
          isSelected={this.state.dates[date]}
          onCheckboxChange={this.handleDateChange}
          key={date}
        />
      );

  createTimeCheckbox = time => (
        <Checkbox
          label={time}
          isSelected={this.state.times[time]}
          onCheckboxChange={this.handleTimeChange}
          key={time}
        />
      );

  createBackupCheckbox = backup => (
    <Checkbox
      label='yes'
      isSelected={this.state.backup}
      onCheckboxChange={this.handleBackupChange}
      />
  );

  createDateCheckboxes = () => DATES.map(this.createDateCheckbox);
  createTimeCheckboxes = () => TIMES.map(this.createTimeCheckbox);

  render(){
    return (
      <section id="apps-open">
      <div className="faq">
        <h2>Applications are Open</h2>
        <div className="application-info">
          <p>The following form is for May event. Please fill out the form and make sure you are
          a member of <a href={HrefLinks.discord}>Discord</a> so that we may contact you.</p>
          <p>Retro inspired games (The Messenger, Cuphead, etc.) will be considered.
          However, all games are subject to the approval of RBP staff.  If you apply with Metroid and
           you've never beaten it, your application may be denied.  Applicants must be 18 years of age
           and a Twitch Affiliate. </p>
          <p>The more dates and times you are available, the higher your chance of getting in is.
          If you only apply for one date with only a four hour window, it'll be difficult to fit you in.</p>
          <p>We look forward to reviewing your application!</p>
        </div>
      </div>
        <div className="application-form">
          <div className="form-header">
            <h5>Please complete the form below</h5>
            <h5>*indicates a required field</h5>
          </div>
          <div className="form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="form-item">
                <label htmlFor="twitchName">Twitch Link*</label>
                <p className="description">Your profile name exactly as it appears on twitch.</p>
                <input name="twitchName" onChange={this.handleTextChange} type="text" placeholder="https://www.twitch.tv/Batman"/>
              </div>
              <div className="form-item">
                <label htmlFor="discordName">Discord Name*</label>
                <p className="description">Please make sure you've joined the official RBP Discord so we can message you easily.</p>
                <input name="discordName"  onChange={this.handleTextChange} type="text" placeholder="Batman"/>
              </div>
              <div className="form-item">
                <label htmlFor="twitterName">Twitter Name</label>
                <p className="description">Please enter your Twitter name so we may easily find and @ you during your segment.</p>
                <input name="twitterName"  onChange={this.handleTextChange} type="text" placeholder="Batman"/>
              </div>
              <div className="form-item">
                <label htmlFor="firstGame">Game 1*</label>
                <p className="description">The first game you will play during your segment.</p>
                <input name="firstGame"  onChange={this.handleTextChange} type="text" placeholder="Super Mario Bro. 2 BBy"/>
              </div>
              <div className="form-item">
                <label htmlFor="secondGame">Game 2*</label>
                <p className="description">The second game you will play during your segment.</p>
                <input name="secondGame"  onChange={this.handleTextChange} type="text" placeholder="Super Mario Bros. 2 again BBy"/>
              </div>
              <div className="form-item">
                <h5>Available Dates*</h5>
                <div className="checkbox-section">
                    {this.createDateCheckboxes()}
                </div>
              </div>
              <div className="form-item">
                <h5>Available Times*</h5>
                <p className="description">All Times are in Eastern Time, the more availability you have, the higher chance you have to get into the event!</p>
                <div className="checkbox-section">
                  {this.createTimeCheckboxes()}
                </div>
              </div>
              <div className="form-item">
                <label htmlFor="donationIncentive">Donation Incentive</label>
                <input name="donationIncentive"  onChange={this.handleTextChange} type="text" placeholder="Super Mario Bros. 2 again BBy"/>
              </div>
              <div className="form-item">
                <label htmlFor="whatDoYouLike">Why would you like to participate in RetroBlockParty? *</label>
                <textarea name="whatDoYouLike"  onChange={this.handleTextChange} type="text" placeholder="I like the food"/>
              </div>
              <div className="form-item">
                <h5>Would you be willing to be available as a backup streamer?</h5>
                <div className="checkbox-section">
                    {this.createBackupCheckbox()}
                </div>
                </div>
                <button name="submint" type="submit" > submit</button>
            </form>
          </div>
        </div>
      </section>
    );
  }

}

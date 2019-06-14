import React, {Component} from 'react';
import './ApplicationsOpen.scss';
import {HrefLinks} from '../../.././Utils/HrefLinks';

export default class ApplicationsOpen extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

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
          <div class="form-wrapper">
            <form>
              <div className="form-item">
                <label for="twitchName">Twitch Link*</label>
                <p className="description">Your profile name exactly as it appears on twitch.</p>
                <input name="twitchName" type="text" placeholder="https://www.twitch.tv/Batman"/>
              </div>
              <div className="form-item">
                <label for="discordName">Discord Name*</label>
                <p className="description">Please make sure you've joined the official RBP Discord so we can message you easily.</p>
                <input name="discordName" type="text" placeholder="Batman"/>
              </div>
              <div className="form-item">
                <label for="twitterName">Twitter Name</label>
                <p className="description">Please enter your Twitter name so we may easily find and @ you during your segment.</p>
                <input name="twitterName" type="text" placeholder="Batman"/>
              </div>
              <div className="form-item">
                <label for="firstGame">Game 1*</label>
                <p className="description">The first game you will play during your segment.</p>
                <input name="firstGame" type="text" placeholder="Super Mario Bro. 2 BBy"/>
              </div>
              <div className="form-item">
                <label for="secondGame">Game 2*</label>
                <p className="description">The second game you will play during your segment.</p>
                <input name="secondGame" type="text" placeholder="https://www.twitch.tv/Batman"/>
              </div>

              <div className="form-item">
                <label for="">Available Dates*</label>
                <input name="June28" type="checkbox">June 28 - Open slots begin at 6PM</input>
                <input name="June28" type="checkbox">June 28 - Open slots begin at 6PM</input>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

}

import React from 'react';
import './TakingApplications.scss';
import Heart from '.././Heart/Heart';


function TakingApplications() {
  return (
    <div className="taking-applications">
      <Heart />
      <div className="info">
        <h2>Join the Party</h2>
        <p>Sorry, we don't currently have a schedule because we are in the process of taking applications.
        Check out the applications page for more details if you would like to join the party.

        In the meantime, come join the <a href="#">Discord</a> or follow us on <a href="#">Twitter</a> for up to date announcements, news or to chat with the community! </p>
        <p>And of course please check back soon for the complete event schedule!</p>
      </div>
    </div>
  );
}


export default TakingApplications;

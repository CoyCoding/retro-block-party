import React from 'react';
import './ApplicationsClosed.scss';
import Heart from '.././Heart/Heart'
import {HrefLinks} from '../../.././Utils/HrefLinks';

function ApplicationsClosed() {
  return (
    <div className="taking-applications">
      <Heart />
      <div className="info">
      <h2>Coming Soon!</h2>
      <p>The schedule is being processed at this very moment and could be posted any second.
      You could sit around refreshing this page all day but I recomend joining the <a href={HrefLinks.discord}>Discord Server</a> or following us on <a href={HrefLinks.twitter}>Twitter</a> instead! </p>
      <p>And of course please check back soon for the complete event schedule!</p>
    </div>
    </div>
  );
}


export default ApplicationsClosed;

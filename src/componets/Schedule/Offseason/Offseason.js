import React from 'react';
import './Offseason.scss';
import Heart from '.././Heart/Heart';
import {HrefLinks} from '../../.././Utils/HrefLinks';

function Offseason() {
  return (
    <div className="taking-applications">
    <Heart />
    <div className="info">
    <h2>Relax</h2>
    <p>Don't worry The Retro Block Party ain't dead yet. We are currently setting up our next event and will be opening applications soon.
    Come join the <a href={HrefLinks.discord}>Discord Server</a> or follow us on <a href={HrefLinks.twitter}>Twitter</a> for up to date announcements, news or to just chat with the community! </p>
    <p>And of course please check back soon for the application update and complete event schedule!</p>
  </div>
    </div>
  );
}


export default Offseason;

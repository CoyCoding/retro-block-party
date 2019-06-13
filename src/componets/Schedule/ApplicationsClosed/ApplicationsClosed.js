import React from 'react';
import './ApplicationsClosed.scss';
import Heart from '.././Heart/Heart'
function ApplicationsClosed() {
  return (
    <div className="taking-applications">
      <Heart />
      <div className="info">
      <h2>Coming Soon!</h2>
      <p>The schedule is being processed at this very moment and could be posted any second.
      You could sit around refreshing this page all day but I recomend joining the <a href="#">Discord Server</a> or follow us on <a href="#">Twitter</a> instead! </p>
      <p>And of course please check back soon for the complete event schedule!</p>
    </div>
    </div>
  );
}


export default ApplicationsClosed;

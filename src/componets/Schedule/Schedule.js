import React from 'react';
import './Schedule.scss';

function Schedule(props) {
  return (
    <header id="not-found">
      Schedule: {props.scheduleOpen}
    </header>
  );
}

export default Schedule;

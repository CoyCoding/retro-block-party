import React from 'react';
import './Schedule.scss';
import TakingApplications from './TakingApplications/TakingApplications';
import Offseason from './Offseason/Offseason';

function Schedule(props) {
    console.log(props.scheduleStatus);
  return (

    <section id="schedule">
      <div className="schedule-wrapper">
      {handleScheduleStatus(props.scheduleStatus)}
      </div>
    </section>
  );
}

const handleScheduleStatus = (scheduleStatus) =>{
  console.log(scheduleStatus)
  switch(scheduleStatus){
    case 'open':
    return(
      <TakingApplications />
    );
    case 'offseason':
    return(
      <Offseason />
    )
  }

}


export default Schedule;

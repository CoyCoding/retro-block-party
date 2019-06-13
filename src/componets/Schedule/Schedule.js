import React from 'react';
import './Schedule.scss';
//import {handleScheduleStatus} from './Utils/scheduleStatusHandler';
import TakingApplications from './TakingApplications/TakingApplications';
import Offseason from './Offseason/Offseason';
export function Schedule(props) {
  return (
    <section id="schedule">
      <div className="schedule-wrapper">
      {handleScheduleStatus(props.scheduleStatus)}
      </div>
    </section>
  );
}

export const handleScheduleStatus = (scheduleStatus) =>{
  //console.log(<TakingApplications />)
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

// export default Schedule;

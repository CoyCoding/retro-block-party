import React from 'react';
import './Schedule.scss';
import TakingApplications from './TakingApplications/TakingApplications';
import Offseason from './Offseason/Offseason';
import FinishedSchedule from './FinishedSchedule/FinishedSchedule';
import ApplicationsClosed from './ApplicationsClosed/ApplicationsClosed';


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
    case 'closed':
    return(
      <ApplicationsClosed />
    )
    case 'finished':
    return(
      <FinishedSchedule />
    )
  }
}

export default Schedule;

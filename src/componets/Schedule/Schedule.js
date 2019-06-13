import React from 'react';
import './Schedule.scss';
import TakingApplications from './TakingApplications/TakingApplications';
import Offseason from './Offseason/Offseason';
import FinishedSchedule from './FinishedSchedule/FinishedSchedule';
import ApplicationsClosed from './ApplicationsClosed/ApplicationsClosed';


export function Schedule(props) {
  return (
    <section id="schedule">
      <select value={props.scheduleStatus} onChange={props.scheduleStatusChange}>
        <option value="open">open</option>
        <option value="offseason">offseason</option>
        <option value="closed">closed</option>
        <option value="finished">finished</option>
      </select>
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

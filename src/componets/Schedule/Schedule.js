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
        <option value="takingApplications">Taking Applications</option>
        <option value="offseason">Offseason</option>
        <option value="applicationsClosed">Applications Closed</option>
        <option value="scheduleFinished">Schedule Finished</option>
      </select>
      <div className="schedule-wrapper">
      {handleScheduleStatus(props.scheduleStatus)}
      </div>
    </section>
  );
}

export const handleScheduleStatus = (scheduleStatus) =>{
  switch(scheduleStatus){
    case 'takingApplications':
    return(
      <TakingApplications />
    );
    case 'offseason':
    return(
      <Offseason />
    )
    case 'applicationsClosed':
    return(
      <ApplicationsClosed />
    )
    case 'scheduleFinished':
    return(
      <FinishedSchedule />
    )
  }
}

export default Schedule;

import React from 'react';
import './Schedule.scss';
import TakingApplications from './TakingApplications/TakingApplications';

function Schedule(props) {
    console.log(props.scheduleStatus);
  return (

    <header id="not-found">
      Schedule: {handleScheduleStatus(props.scheduleStatus)}
    </header>
  );
}

const handleScheduleStatus = (scheduleStatus) =>{
  console.log(scheduleStatus)
  switch(scheduleStatus){
    case 'open':
    return(
      <TakingApplications />
    )
  }

}


export default Schedule;

import React from 'react';
import './Heart.scss';
const imgUrl = require ('../../.././img/8bitheart.png');

//This component is used by ApplicationClosed Offseason and TakingApplications
function Heart() {
  return (

    <div className="img-wrapper">
      <div className="img">
        <svg width="0" height="0">
          <clipPath id="clipPolygon">
            <polygon points="187 62, 187 30, 93 30, 92 62, 30 62, 30 218, 62 218, 62 249, 93 249, 93 281, 124 281, 124 312, 155 312, 155 343, 187 343, 187 375, 218 375, 218 406, 280 406, 280 375, 312 375, 312 343, 343 343, 343 312, 374 312, 374 281, 405 281, 405 249, 437 249, 437 218, 468 218, 468 62, 405 62, 405 30, 312 30, 312 62, 280 62, 280 93, 218 93, 218 62">
            </polygon>
          </clipPath>
          </svg>
          </div >
          <img src={imgUrl} alt="rainbow heart" />
        </div >
  );
}


export default Heart;

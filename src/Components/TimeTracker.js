import React from 'react';

function TimeTracker () {
    let hour;
    let minute;
    let second;
    let startTime;
    
    function getCurrentTime() {
      let currentTime = new Date();
      startTime = Date.now();
      hour = currentTime.getHours();
      minute = currentTime.getMinutes();
      second = currentTime.getSeconds();
      let time = document.getElementById('time');
      time.innerText = hour + ":" + minute + ":" + second
    }
    
    function calculateTime() {
      let endTime = Date.now();
      let totalMilliSeconds = endTime - startTime;
      let totalHours = totalMilliSeconds / 1000 / 60 / 60;
      console.log(totalHours)
      let result = document.getElementById('totalWorkTime')
      result.innerText = "Total Time Worked " + totalHours
    }

    return (
     <div>
        <h1 className="center-text">Time Tracker</h1>
        <button onClick={getCurrentTime}>Clock In</button>
        <h1 id='time'></h1>
        <button onClick={calculateTime}>Clock Out</button>
        <h1 id='totalWorkTime'></h1>
     </div>
    )
}

export default TimeTracker;
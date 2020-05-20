import React from 'react';

function TimeTracker () {
    return (
     <div>
        <h1 className="center-text">Time Tracker</h1>
        <button>Clock In</button>
        <h1 id='time'></h1>
        <button>Clock Out</button>
        <h1 id='totalWorkTime'></h1>
     </div>
    )
}

export default TimeTracker;
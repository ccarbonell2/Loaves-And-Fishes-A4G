import React from 'react';
import Navigation from './Navigation';

function Hello() {
    return (
        <div>
            <h1>Schedule</h1>
            <h2>Friday, April 19</h2>
            <p>Select start time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T17:00')} />
            <p>Select end time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T18:30')} />
        </div>
    );
};


export default Hello;
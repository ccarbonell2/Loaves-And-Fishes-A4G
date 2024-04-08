import React from 'react';
import Navigation from './Navigation';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
//dayjs installation instructions: https://mui.com/x/react-date-pickers/getting-started/

function Hello() {
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h1>Schedule</h1>
            <h2>Friday, April 19</h2>
            <p>Select start time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T17:00')} />
            <p>Select end time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T18:30')} />
            <br /><button>Submit</button>

            <h2>Saturday, April 20</h2>
            <p>Select start time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T8:30')} />
            <p>Select end time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T12:00')} />
            <button>Submit</button>

            <h2>Friday, May 17</h2>
            <p>Select start time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T17:00')} />
            <p>Select end time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T18:30')} />
            <button>Submit</button>

            <h2>Saturday, May 18</h2>
            <p>Select start time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T8:30')} />
            <p>Select end time:</p>
            <TimePicker defaultValue={dayjs('2024-04-19T12:00')} />
            <button>Submit</button>
    </LocalizationProvider>
    );
    
};


export default Hello;
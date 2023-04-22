import React, {useState, useEffect} from 'react';
import './componentStyles/Countdown.css'

export function Countdown() {

  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }
  });

  return (
    <div className='countdown'>
        <div className='countdown-header'><p>DEMO</p></div>
        <div className='screen'>
          <p> Time : {date.toLocaleTimeString()}</p>
          <p> Date : {date.toLocaleDateString()}</p>
        </div>
    </div>
  );
}

export default Countdown;
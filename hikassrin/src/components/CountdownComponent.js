import React, { useState, useEffect } from 'react';

function CountdownComponent() {
  const [countdown, setCountdown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    const interval = setInterval(() => {
      const countdownDate = new Date("May 5, 2023 05:15:00").getTime();
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({days, hours, minutes, seconds});
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-component">
          <p> COUNTDOWN </p>

      <p>{`${countdown.days}:${countdown.hours}:${countdown.minutes}:${countdown.seconds}`}</p>
    </div>
  );
}

export default CountdownComponent;

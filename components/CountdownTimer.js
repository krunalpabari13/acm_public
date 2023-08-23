// components/CountdownCircleTimer.js
import { useEffect, useState } from 'react';
import styles from '../styles/CountdownTimer.module.css';

const CountdownTimer = () => {
  const targetDate = new Date("2023-09-05T00:00:00"); // Target date
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;
      setTimeLeft(timeRemaining);

      if (timeRemaining <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((timeLeft / 1000) % 60);

  return (
    
    <div className={styles.circle}>

      <div>{daysLeft}Days : </div> 
      <div>{hoursLeft}Hr :</div>
      <div>{minutesLeft}Min : </div>
      <div>{secondsLeft}Secs</div>
    </div>
  );
};

export default CountdownTimer;

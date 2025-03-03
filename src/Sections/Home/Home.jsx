import React, { useState, useEffect } from "react";
import "./home.css";

export const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-02-28T00:00:00').getTime();
    const now = new Date().getTime();
    return targetDate - now;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((timeLeft % (1000 * 60)) / 1000));

  return (
    <div className="main">
      <img src="./images/ironman.png" alt="Iron Man" className="marvel" />
      <img src="./images/batman.png" alt="Batman" className="dc" />
      <img src="./images/title1.png" alt="Logo" className="logo1" />
      <img src="./images/chakara.png" alt="Chakra" className="charakara" />
      
      <div className="countdown-container">
        <div className="countdown-item">
          <div className="countdown-value marvel-glow">{days}</div>
          <div className="countdown-label">DAYS</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value marvel-glow">{hours.toString().padStart(2, '0')}</div>
          <div className="countdown-label">HOURS</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value marvel-glow">{minutes.toString().padStart(2, '0')}</div>
          <div className="countdown-label">MIN</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value dc-glow">{seconds.toString().padStart(2, '0')}</div>
          <div className="countdown-label">SEC</div>
        </div>
      </div>
    </div>
  );
};
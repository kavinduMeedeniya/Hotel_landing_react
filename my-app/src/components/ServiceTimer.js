import React, { useEffect } from 'react';
import "./ServiceTimer.css";

const ServiceTimer = () => {
  const counters = [
    { id: 'counter1', endValue: 100, suffix: '%' },
    { id: 'counter2', endValue: 1723, suffix: '' },
    { id: 'counter3', endValue: 4.9, suffix: '/5' }
  ];

  useEffect(() => {
    const animateCounters = () => {
      counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        const duration = 2000; // Animation duration in ms
        const frameRate = 60; // Frames per second
        const totalFrames = Math.round((duration / 1000) * frameRate);
        const increment = counter.endValue / totalFrames;
        let currentValue = 0;

        const updateCounter = () => {
          currentValue += increment;
          if (currentValue >= counter.endValue) {
            currentValue = counter.endValue;
            clearInterval(interval);
          }
          element.textContent = `${currentValue.toFixed(counter.id === 'counter3' ? 1 : 0)}${counter.suffix}`;
        };

        const interval = setInterval(updateCounter, 1000 / frameRate);
      });
    };

    // Trigger the animation immediately on component mount
    animateCounters();
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="service_timer">
      <div className="spacer"></div> {/* Spacer to allow scrolling */}
      <section className="counter-section">
        <div className="counter">
          <h1 id="counter1">0%</h1>
          <p>Superior Service</p>
        </div>
        <div className="counter">
          <h1 id="counter2">0</h1>
          <p>Satisfied Customers</p>
        </div>
        <div className="counter">
          <h1 id="counter3">0/5</h1>
          <p>Star Service Rating</p>
        </div>
      </section>
    </div>
  );
};

export default ServiceTimer;

import { useState, useEffect } from 'react';

export function Relogio() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
      <>
      <h1>Relógio</h1>
      <h2>{time.toLocaleTimeString()}</h2>
      </>
  );
}
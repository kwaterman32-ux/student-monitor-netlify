import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Connecting to Monitoring System');

  useEffect(() => {
    // Simulated connection logic
    const timer = setTimeout(() => {
      setStatus('Connected to Teacher Monitoring');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      textAlign: 'center', 
      padding: '20px', 
      fontFamily: 'Arial'
    }}>
      <h1>Student Monitoring Interface</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;

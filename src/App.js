import { useState, useEffect } from 'react';
import './App.css';


function App() { 
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await fetch(`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
   <div className='container'>
    <h1 >What should I do today?</h1>
  

   <div className='tip'>
   <h2>{advice}</h2>
   <button onClick={getAdvice}>New Advice</button>
   </div>
   </div>
    </div>
  );
}

export default App;

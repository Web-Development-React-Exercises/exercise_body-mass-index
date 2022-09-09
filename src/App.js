import './App.css';
import { useState } from 'react';

function App() {

  const [weight, setWeight] = useState ();
  const [height, setHeight] = useState ();
  const [bmi, setBmi] = useState (0);

  function handleSubmit(e) {
    e.preventDefault();
    const result = weight / (height * height);
    setBmi(result);
  }

  return (
    <div>
      <h3>Body Mass Index</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight (Kilograms)</label>
          <input type="float" onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Height (Centimeters)</label>
          <input type="float" onChange={function(e) {
            const height = e.target.value / 100;
            setHeight(height);
          }}/>
        </div>
        <div>
          <label htmlFor="">BMI</label>
          <output>{bmi}</output>
          <button onclick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

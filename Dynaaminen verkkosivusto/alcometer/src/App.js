
import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [bal, setBal] = useState(0)

  function calculate(e) {
    e.preventDefault();
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
      if (gender === "male") {
        if ((gramsLeft / (weight * 0.7)) < 0) {setBal(0)}
        else {
          setBal( gramsLeft / (weight * 0.7))
        }
        
        
      } else {
        if ((gramsLeft / (weight * 0.6)) < 0) {setBal(0)}
        else {
          setBal( gramsLeft / (weight * 0.6))
        }
      }
  }



  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight:</label>
        <input type="number" step="0.01" onChange={e => setWeight(e.target.value)} value={weight}/>
      </div>
      <div>
        <label>Bottles:</label>
        <select type="number" onChange={e => setBottles(e.target.value)} value={bottles}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Time:</label>
        <select type="number" onChange={e => setTime(e.target.value)} value={time}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div value={gender} onChange={e => setGender(e.target.value)}>
        <label>Gender:</label>
        <input type="radio" value="male" name="gender" /> Male
        <input type="radio" value="female" name="gender" /> Female
      </div>

      <div>
        <label>Blood alcohol level:</label>
        <output>
          {bal.toFixed(2)}</output>
      </div>

      <div>
        <button>Calculate</button>
      </div>

    </form>
  );
}

export default App;

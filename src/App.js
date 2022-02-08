import React, { useState } from 'react';
import data from './data';
function App() {
  const [Count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => { 
    e.preventDefault();
    let amount = parseInt(Count)
    if (amount < 0) { amount = 1 }
    if (amount > data.length) { console.log('moretha'); }
    if (amount <= data.length) {
      setText(data.slice(0, amount));
    }
    
  }

  return (
    <div className="App">
      <h2>lorem ipsum project setup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">paragrafs</label>
        <input type="number" name='amount' id='amount' value={Count} onChange={(e) => { setCount(e.target.value)}}/>
        <button type='submit'>generate</button>
      </form>
      <article>
        {text.map((paragrph,index) => { 
          return <p key={index}>{paragrph}</p>
        })}
      </article>

    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let resetNumber;

  function addToCount(number) {
    console.log(number.target.value)
    setCount(count + parseInt(number.target.value));
  }

  function resetCount() {
    setCount(0);
  }

  function resetCountTo(){
    console.log(resetNumber.value);
    setCount(parseInt(resetNumber.value));
    resetNumber.value = 0;
  }

  return (
    <div>
      { count }
      <br />
      <button onClick={addToCount} value="1">+1</button>
      <button onClick={addToCount} value="5">+5</button>
      <button onClick={addToCount} value="-5">-5</button>
      <button onClick={addToCount} value="-1">-1</button>
      <br />
      <button onClick={resetCount}>Reset Count</button>
      <br />
      <input type='number' ref={node => resetNumber = node} placeholder="Reset count to this number"></input>
      <button onClick={resetCountTo}>Reset Count to Number</button>
      {/* <CurrentCount />
      <AddToCount />
      <ResetCount />
      <SetCount /> */}
    </div>
  );
}

export default App;
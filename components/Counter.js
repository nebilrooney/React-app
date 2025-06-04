import { useState } from 'react';
// This component shows a counter with increase and decrease 
export default function Counter() {
  // Declare state variable count to keep track of the counter value
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter</h3>
      {/* Display the current value of the counter */}
      <p>Current Count: {count}</p>
     {/* Button to increase the count*/}
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
     {/* Button to decrease the count */}
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
      {/* conditional rendering: show massage if count is greater than 5 */}
      {count > 5 && <p>You've clicked more than 5 times</p>}
    </div>
  );
}


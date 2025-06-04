import { useState } from 'react';
// This component shows a toggleable massage using react stat and conditional rendering
export default function FeatureToggle() {
  // state to control wheather the massage is shown or hidden
    const [showMessage, setShowMessage] = useState(false);
  return (
    <div>
      <h3>Toggle Feature</h3>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
      {/* conditionally render the message only if shownMessage is true */}
      {showMessage && <p>✨ Thank you for visiting my app</p>}
    </div>
  );
}

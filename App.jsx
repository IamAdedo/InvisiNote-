import React, { useState } from 'react';

const App = () => {
  const [note, setNote] = useState('');
  const [hidden, setHidden] = useState(false);

  return (
    <div className="container">
      <h1>🕵️‍♂️ InvisiNote</h1>
      <textarea
        placeholder="Type your secret note..."
        value={note}
        onChange={e => setNote(e.target.value)}
        className={hidden ? 'hidden' : ''}
      />
      <button onClick={() => setHidden(!hidden)}>
        {hidden ? 'Reveal' : 'Hide'} Note
      </button>
    </div>
  );
};

export default App;

import { useState } from 'react';

import Accordion from './components/accordion';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Accordion component */}
      <Accordion />
    </>
  );
}

export default App;

import { useState } from 'react';

import Accordion from './components/accordion';
import Accordion2 from './components/accordion_2';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Accordion component */}
      <Accordion />
      <Accordion2 />
    </>
  );
}

export default App;

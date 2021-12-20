import { useState } from 'react';

import TestUnitTestMocksOutput from './TestUnitTestMocksOutput';

const TestUnitTestMocksGreeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <TestUnitTestMocksOutput>It's good to see you!</TestUnitTestMocksOutput>}
      {changedText && <TestUnitTestMocksOutput>Changed!</TestUnitTestMocksOutput>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default TestUnitTestMocksGreeting;

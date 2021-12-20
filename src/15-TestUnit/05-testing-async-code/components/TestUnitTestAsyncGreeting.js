import { useState } from 'react';

import TestUnitTestAsyncOutput from './TestUnitTestAsyncOutput';

const TestUnitTestAsyncGreeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <TestUnitTestAsyncOutput>It's good to see you!</TestUnitTestAsyncOutput>}
      {changedText && <TestUnitTestAsyncOutput>Changed!</TestUnitTestAsyncOutput>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default TestUnitTestAsyncGreeting;

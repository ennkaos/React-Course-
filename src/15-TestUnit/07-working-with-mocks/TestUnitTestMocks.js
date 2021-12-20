import TestUnitTestMocksGreeting from './components/TestUnitTestMocksGreeting';
import TestUnitTestMocksAsync from './components/TestUnitTestMocksAsync';
import './TestUnitTestMocks.css';

function TestUnitTestMocks() {
  return (
    <div className='App'>
      <TestUnitTestMocksAsync />
      <TestUnitTestMocksGreeting />
    </div>
  );
}

export default TestUnitTestMocks;

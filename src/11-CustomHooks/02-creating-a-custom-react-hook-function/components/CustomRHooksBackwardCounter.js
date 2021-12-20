import { useState, useEffect } from 'react';

import CustomRHooksCard from './CustomRHooksCard';

const CustomRHooksBackwardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <CustomRHooksCard>{counter}</CustomRHooksCard>;
};

export default CustomRHooksBackwardCounter;

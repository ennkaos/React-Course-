import { useState, useEffect } from 'react';

import CustomHooksStartCard from './CustomHooksStartCard';

const CustomHooksStartBackwardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <CustomHooksStartCard>{counter}</CustomHooksStartCard>;
};

export default CustomHooksStartBackwardCounter;

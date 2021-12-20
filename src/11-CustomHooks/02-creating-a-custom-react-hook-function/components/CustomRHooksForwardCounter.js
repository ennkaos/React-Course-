import CustomRHooksCard from './CustomRHooksCard';
import CustomRHooksuseCounter from '../hooks/CustomRHooks-use-counter';

const CustomRHooksForwardCounter = () => {
  const counter = CustomRHooksuseCounter();

  return <CustomRHooksCard>{counter}</CustomRHooksCard>;
};

export default CustomRHooksForwardCounter;

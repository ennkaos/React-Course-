import CustomHooksConfCard from './CustomHooksConfCard';
import CustomHooksConfuseCounter from '../hooks/CustomHooksConf-use-counter';

const CustomHooksConfBackwardCounter = () => {
  const counter = CustomHooksConfuseCounter(false);

  return <CustomHooksConfCard>{counter}</CustomHooksConfCard>;
};

export default CustomHooksConfBackwardCounter;

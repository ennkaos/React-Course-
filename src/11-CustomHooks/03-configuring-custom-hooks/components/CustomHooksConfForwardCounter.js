import CustomHooksConfCard from './CustomHooksConfCard';
import CustomHooksConfuseCounter from '../hooks/CustomHooksConf-use-counter';

const CustomHooksConfForwardCounter = () => {
  const counter = CustomHooksConfuseCounter();

  return <CustomHooksConfCard>{counter}</CustomHooksConfCard>;
};

export default CustomHooksConfForwardCounter;

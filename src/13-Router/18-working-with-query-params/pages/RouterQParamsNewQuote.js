import { useNavigate } from 'react-router-dom';

import RouterQParamsQuoteForm from '../components/quotes/RouterQParamsQuoteForm';

const RouterQParamsNewQuote = () => {
  const history = useNavigate();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    
    history.push('/quotes');
  };

  return <RouterQParamsQuoteForm onAddQuote={addQuoteHandler} />;
};

export default RouterQParamsNewQuote;

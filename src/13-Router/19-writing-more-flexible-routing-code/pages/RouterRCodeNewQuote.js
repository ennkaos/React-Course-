import { useNavigate } from 'react-router-dom';

import RouterRCodeQuoteForm from '../components/quotes/RouterRCodeQuoteForm';

const RouterRCodeNewQuote = () => {
  const history = useNavigate();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    
    history.push('/quotes');
  };

  return <RouterRCodeQuoteForm onAddQuote={addQuoteHandler} />;
};

export default RouterRCodeNewQuote;

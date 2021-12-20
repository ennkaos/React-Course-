import { useNavigate } from 'react-router-dom';

import RouterRouteTstQuoteForm from '../components/quotes/RouterRouteTstQuoteForm';

const RouterRouteTstNewQuote = () => {
  const history = useNavigate();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    
    history.push('/quotes');
  };

  return <RouterRouteTstQuoteForm onAddQuote={addQuoteHandler} />;
};

export default RouterRouteTstNewQuote;

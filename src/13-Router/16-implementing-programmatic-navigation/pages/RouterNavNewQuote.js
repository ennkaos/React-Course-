import { useNavigate } from 'react-router-dom';

import RouterNavQuoteForm from '../components/quotes/RouterNavQuoteForm';

const RouterNavNewQuote = () => {
  const history = useNavigate();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    
    history.push('/quotes');
  };

  return <RouterNavQuoteForm onAddQuote={addQuoteHandler} />;
};

export default RouterNavNewQuote;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RouterFinishedQuoteForm from '../components/quotes/RouterFinishedQuoteForm';
import RouterFinishedUseHttp from '../hooks/RouterFinished-use-http';
import { addQuote } from '../lib/RouterFinished-api';

const RouterFinishedNewQuote = () => {
  const { sendRequest, status } = RouterFinishedUseHttp(addQuote);
  const history = useNavigate();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <RouterFinishedQuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default RouterFinishedNewQuote;

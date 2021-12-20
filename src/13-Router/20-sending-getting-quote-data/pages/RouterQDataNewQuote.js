import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RouterQDataQuoteForm from '../components/quotes/RouterQDataQuoteForm';
import RouterQDataUseHttp from '../hooks/RouterQData-use-http';
import { addQuote } from '../lib/RouterQData-api';

const RouterQDataNewQuote = () => {
  const { sendRequest, status } = RouterQDataUseHttp(addQuote);
  const history = useNavigate();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <RouterQDataQuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default RouterQDataNewQuote;

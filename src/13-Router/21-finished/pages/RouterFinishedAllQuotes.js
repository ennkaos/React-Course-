import { useEffect } from 'react';

import RouterFinishedQuoteList from '../components/quotes/RouterFinishedQuoteList';
import RouterFinishedLoadingSpinner from '../components/UI/RouterFinishedLoadingSpinner';
import RouterFinishedNoQuotesFound from '../components/quotes/RouterFinishedNoQuotesFound';
import RouterFinishedUseHttp from '../hooks/RouterFinished-use-http';
import { getAllQuotes } from '../lib/RouterFinished-api';

const RouterFinishedAllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = RouterFinishedUseHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <RouterFinishedLoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <RouterFinishedNoQuotesFound />;
  }

  return <RouterFinishedQuoteList quotes={loadedQuotes} />;
};

export default RouterFinishedAllQuotes;

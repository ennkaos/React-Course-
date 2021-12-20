import { useEffect } from 'react';

import RouterQDataQuoteList from '../components/quotes/RouterQDataQuoteList';
import RouterQDataLoadingSpinner from '../components/UI/RouterQDataLoadingSpinner';
import RouterQDataNoQuotesFound from '../components/quotes/RouterQDataNoQuotesFound';
import RouterQDataUseHttp from '../hooks/RouterQData-use-http';
import { getAllQuotes } from '../lib/RouterQData-api';

const RouterQDataAllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = RouterQDataUseHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <RouterQDataLoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <RouterQDataNoQuotesFound />;
  }

  return <RouterQDataQuoteList quotes={loadedQuotes} />;
};

export default RouterQDataAllQuotes;

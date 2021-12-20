import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useMatch } from 'react-router-dom';

import RouterFinishedHighlightedQuote from '../components/quotes/RouterFinishedHighlightedQuote';
import RouterFinishedComments from '../components/comments/RouterFinishedComments';
import RouterFinishedUseHttp from '../hooks/RouterFinished-use-http';
import { getSingleQuote } from '../lib/RouterFinished-api';
import RouterFinishedLoadingSpinner from '../components/UI/RouterFinishedLoadingSpinner';

const RouterFinishedQuoteDetail = () => {
  const match = useMatch();
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = RouterFinishedUseHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <RouterFinishedLoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <RouterFinishedHighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <RouterFinishedComments />
      </Route>
    </Fragment>
  );
};

export default RouterFinishedQuoteDetail;

import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useMatch } from 'react-router-dom';

import RouterQDataHighlightedQuote from '../components/quotes/RouterQDataHighlightedQuote';
import RouterQDataComments from '../components/comments/RouterQDataComments';
import RouterQDataUseHttp from '../hooks/RouterQData-use-http';
import { getSingleQuote } from '../lib/RouterQData-api';
import RouterQDataLoadingSpinner from '../components/UI/RouterQDataLoadingSpinner';

const RouterQDataQuoteDetail = () => {
  const match = useMatch();
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = RouterQDataUseHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <RouterQDataLoadingSpinner />
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
      <RouterQDataHighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <RouterQDataComments />
      </Route>
    </Fragment>
  );
};

export default RouterQDataQuoteDetail;

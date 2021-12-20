import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import RouterPracticeNRoutesComments from '../components/comments/RouterPracticeNRoutesComments';

const RouterPracticeNRoutesQuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <RouterPracticeNRoutesComments />
      </Route>
    </Fragment>
  );
};

export default RouterPracticeNRoutesQuoteDetail;

import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import RouterAddWrapperComments from '../components/comments/RouterAddWrapperComments';

const RouterAddWrapperQuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <RouterAddWrapperComments />
      </Route>
    </Fragment>
  );
};

export default RouterAddWrapperQuoteDetail;

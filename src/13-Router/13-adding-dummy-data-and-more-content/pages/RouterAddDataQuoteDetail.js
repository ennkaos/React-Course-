import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import RouterAddDataComments from '../components/comments/RouterAddDataComments';

const RouterAddDataQuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <RouterAddDataComments />
      </Route>
    </Fragment>
  );
};

export default RouterAddDataQuoteDetail;

import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import RouterQParamsHighlightedQuote from '../components/quotes/RouterQParamsHighlightedQuote';
import RouterQParamsComments from '../components/comments/RouterQParamsComments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterQParamsQuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <RouterQParamsHighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <RouterQParamsComments />
      </Route>
    </Fragment>
  );
};

export default RouterQParamsQuoteDetail;

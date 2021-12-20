import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import RouterAddNFoundHighlightedQuote from '../components/quotes/RouterAddNFoundHighlightedQuote';
import RouterAddNFoundComments from '../components/comments/RouterAddNFoundComments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterAddNFoundQuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <RouterAddNFoundHighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <RouterAddNFoundComments />
      </Route>
    </Fragment>
  );
};

export default RouterAddNFoundQuoteDetail;

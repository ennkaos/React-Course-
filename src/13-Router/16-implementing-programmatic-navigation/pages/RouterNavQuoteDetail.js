import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import RouterNavHighlightedQuote from '../components/quotes/RouterNavHighlightedQuote';
import RouterNavComments from '../components/comments/RouterNavComments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterNavQuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <RouterNavHighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <RouterNavComments />
      </Route>
    </Fragment>
  );
};

export default RouterNavQuoteDetail;

import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import RouterRouteTstHighlightedQuote from '../components/quotes/RouterRouteTstHighlightedQuote';
import RouterRouteTstComments from '../components/comments/RouterRouteTstComments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterRouteTstQuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <RouterRouteTstHighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <RouterRouteTstComments />
      </Route>
    </Fragment>
  );
};

export default RouterRouteTstQuoteDetail;

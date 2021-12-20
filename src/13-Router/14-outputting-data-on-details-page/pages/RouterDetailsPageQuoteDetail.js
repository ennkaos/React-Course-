import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import RouterDetailsPageHighlightedQuote from '../components/quotes/RouterDetailsPageHighlightedQuote';
import RouterDetailsPageComments from '../components/comments/RouterDetailsPageComments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterDetailsPageQuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <RouterDetailsPageHighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <RouterDetailsPageComments />
      </Route>
    </Fragment>
  );
};

export default RouterDetailsPageQuoteDetail;

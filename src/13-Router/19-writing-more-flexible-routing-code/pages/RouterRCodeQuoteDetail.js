import { Fragment } from 'react';
import { useParams, Route, Link, useMatch } from 'react-router-dom';

import RouterRCodeHighlightedQuote from '../components/quotes/RouterRCodeHighlightedQuote';
import RouterRCodeComments from '../components/comments/RouterRCodeComments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterRCodeQuoteDetail = () => {
  const match = useMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <RouterRCodeHighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <RouterRCodeComments />
      </Route>
    </Fragment>
  );
};

export default RouterRCodeQuoteDetail;

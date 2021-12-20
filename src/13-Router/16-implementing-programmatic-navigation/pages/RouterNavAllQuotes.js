import RouterNavQuoteList from '../components/quotes/RouterNavQuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterNavAllQuotes = () => {
  return <RouterNavQuoteList quotes={DUMMY_QUOTES} />
};

export default RouterNavAllQuotes;
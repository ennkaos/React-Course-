import RouterAddNFoundQuoteList from '../components/quotes/RouterAddNFoundQuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterAddNFoundAllQuotes = () => {
  return <RouterAddNFoundQuoteList quotes={DUMMY_QUOTES} />
};

export default RouterAddNFoundAllQuotes;
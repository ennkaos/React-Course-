import RouterRouteTstQuoteList from '../components/quotes/RouterRouteTstQuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterRouteTstAllQuotes = () => {
  return <RouterRouteTstQuoteList quotes={DUMMY_QUOTES} />
};

export default RouterRouteTstAllQuotes;
import RouterRCodeQuoteList from '../components/quotes/RouterRCodeQuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterRCodeAllQuotes = () => {
  return <RouterRCodeQuoteList quotes={DUMMY_QUOTES} />
};

export default RouterRCodeAllQuotes;
import RouterDetailsPageQuoteList from '../components/quotes/RouterDetailsPageQuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterDetailsPageAllQuotes = () => {
  return <RouterDetailsPageQuoteList quotes={DUMMY_QUOTES} />
};

export default RouterDetailsPageAllQuotes;
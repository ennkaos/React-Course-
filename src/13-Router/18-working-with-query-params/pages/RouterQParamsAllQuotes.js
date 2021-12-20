import RouterQParamsQuoteList from '../components/quotes/RouterQParamsQuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterQParamsAllQuotes = () => {
  return <RouterQParamsQuoteList quotes={DUMMY_QUOTES} />
};

export default RouterQParamsAllQuotes;
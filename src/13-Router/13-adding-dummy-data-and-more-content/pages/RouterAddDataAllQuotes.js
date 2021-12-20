import QuoteList from '../components/quotes/RouterAddDataQuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const RouterAddDataAllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default RouterAddDataAllQuotes;
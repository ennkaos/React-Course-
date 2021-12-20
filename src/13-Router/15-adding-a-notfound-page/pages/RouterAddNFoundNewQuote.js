import RouterAddNFoundQuoteForm from '../components/quotes/RouterAddNFoundQuoteForm';

const RouterAddNFoundNewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <RouterAddNFoundQuoteForm onAddQuote={addQuoteHandler} />;
};

export default RouterAddNFoundNewQuote;

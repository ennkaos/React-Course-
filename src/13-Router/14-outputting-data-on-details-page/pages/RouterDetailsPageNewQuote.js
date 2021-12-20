import RouterDetailsPageQuoteForm from '../components/quotes/RouterDetailsPageQuoteForm';

const RouterDetailsPageNewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <RouterDetailsPageQuoteForm onAddQuote={addQuoteHandler} />;
};

export default RouterDetailsPageNewQuote;

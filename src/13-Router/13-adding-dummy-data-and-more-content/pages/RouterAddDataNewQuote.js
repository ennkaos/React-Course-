import RouterAddDataQuoteForm from '../components/quotes/RouterAddDataQuoteForm';

const RouterAddDataNewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <RouterAddDataQuoteForm onAddQuote={addQuoteHandler} />;
};

export default RouterAddDataNewQuote;

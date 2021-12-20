import { Route, Routes, Navigate } from 'react-router-dom';

import RouterPracticeRedirectAllQuotes from './pages/RouterPracticeRedirectAllQuotes';
import RouterPracticeRedirectQuoteDetail from './pages/RouterPracticeRedirectQuoteDetail';
import RouterPracticeRedirectNewQuote from './pages/RouterPracticeRedirectNewQuote';

function RouterPracticeRedirect() {
  return (
    <Routes>
      <Route path='/' element = {<Navigate to='/quotes'/>}/>
       
      <Route path='/quotes' element = {<RouterPracticeRedirectAllQuotes/>}/>
       
      <Route path='/quotes/:quoteId' element = {<RouterPracticeRedirectQuoteDetail/>}/>
  
      <Route path='/new-quote' element = {<RouterPracticeRedirectNewQuote/>}/>
      
    </Routes>
  );
}

export default RouterPracticeRedirect;

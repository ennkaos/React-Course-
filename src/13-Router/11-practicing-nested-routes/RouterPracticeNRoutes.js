import { Route, Routes, Navigate } from 'react-router-dom';

import RouterPracticeNRoutesAllQuotes from './pages/RouterPracticeNRoutesAllQuotes';
import RouterPracticeNRoutesQuoteDetail from './pages/RouterPracticeNRoutesQuoteDetail';
import RouterPracticeNRoutesNewQuote from './pages/RouterPracticeNRoutesNewQuote';

function RouterPracticeNRoutes() {
  return (
    <Routes>
      <Route path='/' element = {<Navigate to='/quotes' />}/>
      
      <Route path='/quotes'  element = {<RouterPracticeNRoutesAllQuotes />}/>
     
      <Route path='/quotes/:quoteId' element = {<RouterPracticeNRoutesQuoteDetail />}/>
      <Route path='/new-quote'element = {<RouterPracticeNRoutesNewQuote />}/>
     
    </Routes>
  );
}

export default RouterPracticeNRoutes;

import { Route, Routes, Navigate } from 'react-router-dom';

import RouterRCodeAllQuotes from './pages/RouterRCodeAllQuotes';
import RouterRCodeQuoteDetail from './pages/RouterRCodeQuoteDetail';
import RouterRCodeNewQuote from './pages/RouterRCodeNewQuote';
import RouterRCodeNotFound from './pages/RouterRCodeNotFound';
import RouterRCodeLayout from './components/layout/RouterRCodeLayout';

function RouterRCode() {
  return (
    <RouterRCodeLayout>
      <Routes>
        <Route path='/' element = {<Navigate to='/quotes' />}/>
          
        <Route path='/quotes' element = {<RouterRCodeAllQuotes />}/>
          
        <Route path='/quotes/:quoteId' element = {<RouterRCodeQuoteDetail />}/>
  
        <Route path='/new-quote' element = {<RouterRCodeNewQuote/>}/>
      
        <Route path='*' element = {<RouterRCodeNotFound/>}/>
        
      </Routes>
    </RouterRCodeLayout>
  );
}

export default RouterRCode;

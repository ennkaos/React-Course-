import { Route, Routes, Navigate } from 'react-router-dom';

import RouterAddNFoundAllQuotes from './pages/RouterAddNFoundAllQuotes';
import RouterAddNFoundQuoteDetail from './pages/RouterAddNFoundQuoteDetail';
import RouterAddNFoundNewQuote from './pages/RouterAddNFoundNewQuote';
import RouterAddNNotFound from './pages/RouterAddNNotFound';
import RouterAddNFoundLayout from './components/layout/RouterAddNFoundLayout';

function RouterAddNFound() {
  return (
    <RouterAddNFoundLayout>
      <Routes>
        <Route path='/' element = { <Navigate to='/quotes' />}/>

        <Route path='/quotes' element = {<RouterAddNFoundAllQuotes/>}/>
          
        <Route path='/quotes/:quoteId' element = {<RouterAddNFoundQuoteDetail />}/>
          
        <Route path='/new-quote' element = {<RouterAddNFoundNewQuote/>}/>
        
        <Route path='*'element = {<RouterAddNNotFound/>}/>
  
      </Routes>
    </RouterAddNFoundLayout>
  );
}

export default RouterAddNFound;

import { Route, Routes, Navigate } from 'react-router-dom';

import RouterQParamsAllQuotes from './pages/RouterQParamsAllQuotes';
import RouterQParamsQuoteDetail from './pages/RouterQParamsQuoteDetail';
import RouterQParamsNewQuote from './pages/RouterQParamsNewQuote';
import RouterQParamsNotFound from './pages/RouterQParamsNotFound';
import RouterQParamsLayout from './components/layout/RouterQParamsLayout';

function RouterQParams() {
  return (
    <RouterQParamsLayout>
      <Routes>
        <Route path='/' element = { <Navigate to='/quotes' />}/>
        <Route path='/quotes' element = {<RouterQParamsAllQuotes />}/>
        <Route path='/quotes/:quoteId' element = {<RouterQParamsQuoteDetail />}/>
        <Route path='/new-quote' element = {<RouterQParamsNewQuote/>}/>
        <Route path='*' element = {<RouterQParamsNotFound />}/>
        
      </Routes>
    </RouterQParamsLayout>
  );
}

export default RouterQParams;

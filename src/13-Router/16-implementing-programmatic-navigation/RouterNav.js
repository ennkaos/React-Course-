import { Route, Routes, Navigate } from 'react-router-dom';

import RouterNavAllQuotes from './pages/RouterNavAllQuotes';
import RouterNavQuoteDetail from './pages/RouterNavQuoteDetail';
import RouterNavNewQuote from './pages/RouterNavNewQuote';
import RouterNavNotFound from './pages/RouterNavNotFound';
import RouterNavLayout from './components/layout/RouterNavLayout';

function RouterNav() {
  return (
    <RouterNavLayout>
      <Routes>
        <Route path='/' element = {<Navigate to='/quotes' />}/>
        <Route path='/quotes' element = { <RouterNavAllQuotes />}/>
        <Route path='/quotes/:quoteId' element = { <RouterNavQuoteDetail />}/>
        <Route path='/new-quote' element = { <RouterNavNewQuote />}/>
        <Route path='*' element = { <RouterNavNotFound />}/>
      
      </Routes>
    </RouterNavLayout>
  );
}

export default RouterNav;

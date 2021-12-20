import { Route, Routes, Navigate } from 'react-router-dom';

import RouterRouteTstAllQuotes from './pages/RouterRouteTstAllQuotes';
import RouterRouteTstQuoteDetail from './pages/RouterRouteTstQuoteDetail';
import RouterRouteTstNewQuote from './pages/RouterRouteTstNewQuote';
import RouterRouteTstNotFound from './pages/RouterRouteTstNotFound';
import RouterRouteTstLayout from './components/layout/RouterRouteTstLayout';

function RouterRouteTst() {
  return (
    <RouterRouteTstLayout>
      <Routes>
        <Route path='/' element= {<Navigate to='/quotes'/>}/>
        <Route path='/quotes' element= {<RouterRouteTstAllQuotes />} />
          
        <Route path='/quotes/:quoteId' element= {<RouterRouteTstQuoteDetail />}/>
        <Route path='/new-quote' element= {<RouterRouteTstNewQuote/>}/>
        <Route path='*' element= {<RouterRouteTstNotFound/>}/>
          
      </Routes>
    </RouterRouteTstLayout>
  );
}

export default RouterRouteTst;

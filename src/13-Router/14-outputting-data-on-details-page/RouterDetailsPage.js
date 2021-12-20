import { Route, Routes, Navigate } from 'react-router-dom';

import RouterDetailsPageAllQuotes from './pages/RouterDetailsPageAllQuotes';
import RouterDetailsPageQuoteDetail from './pages/RouterDetailsPageQuoteDetail';
import RouterDetailsPageNewQuote from './pages/RouterDetailsPageNewQuote';
import RouterDetailsPageLayout from './components/layout/RouterDetailsPageLayout';

function RouterDetailsPage() {
  return (
    <RouterDetailsPageLayout>
      <Routes>
        <Route path='/' element= {<Navigate to='/quotes' />}/>
          
        <Route path='/quotes' element= {<RouterDetailsPageAllQuotes/>}/>
          
        <Route path='/quotes/:quoteId' element= {<RouterDetailsPageQuoteDetail/>}/>
      
        <Route path='/new-quote' element= {<RouterDetailsPageNewQuote/>}/>
        
      </Routes>
    </RouterDetailsPageLayout>
  );
}

export default RouterDetailsPage;

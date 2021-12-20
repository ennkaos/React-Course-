import { Route, Routes, Navigate } from 'react-router-dom';

import RouterQDataAllQuotes from './pages/RouterQDataAllQuotes';
import RouterQDataQuoteDetail from './pages/RouterQDataQuoteDetail';
import RouterQDataNewQuote from './pages/RouterQDataNewQuote';
import RouterQDataNotFound from './pages/RouterQDataNotFound';
import RouterQDataLayout from './components/layout/RouterQDataLayout';

function RouterQData() {
  return (
    <RouterQDataLayout>
      <Routes>
        <Route path='/' element = {<Navigate to='/quotes'/>}/>

        <Route path='/quotes' element = { <RouterQDataAllQuotes/>}/>

        <Route path='/quotes/:quoteId'element = {<RouterQDataQuoteDetail/>}/>
    
        <Route path='/new-quote' element= {<RouterQDataNewQuote/>}/>

        <Route path='*' element = {<RouterQDataNotFound/>}/>
        
      </Routes>
    </RouterQDataLayout>
  );
}

export default RouterQData;

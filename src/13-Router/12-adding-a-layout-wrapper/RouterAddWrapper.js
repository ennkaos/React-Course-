import { Route,Navigate,Routes } from 'react-router-dom';

import RouterAddWrapperAllQuotes from './pages/RouterAddWrapperAllQuotes';
import RouterAddWrapperQuoteDetail from './pages/RouterAddWrapperQuoteDetail';
import RouterAddWrapperNewQuote from './pages/RouterAddWrapperNewQuote';
import RouterAddWrapperLayout from './components/layout/RouterAddWrapperLayout';

function RouterAddWrapper() {
  return (
    <RouterAddWrapperLayout>
      <Routes>
        <Route path='/' element= {<Navigate to='/quotes'/>}/>        
        <Route path='/quotes' element= { <RouterAddWrapperAllQuotes />}/>
        <Route path='/quotes/:quoteId'element={<RouterAddWrapperQuoteDetail />}/>
        <Route path='/new-quote'element={<RouterAddWrapperNewQuote/>}/>
      </Routes>
    </RouterAddWrapperLayout>
  );
}

export default RouterAddWrapper;

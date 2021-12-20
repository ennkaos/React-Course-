import { Route, Routes, Navigate } from 'react-router-dom';

import RouterFinishedAllQuotes from './pages/RouterFinishedAllQuotes';
import RouterFinishedQuoteDetail from './pages/RouterFinishedQuoteDetail';
import RouterFinishedNewQuote from './pages/RouterFinishedNewQuote';
import RouterFinishedNotFound from './pages/RouterFinishedNotFound';
import RouterFinishedLayout from './components/layout/RouterFinishedLayout';

function RouterFinished() {
  return (
    <RouterFinishedLayout>
      <Routes>
        <Route path='/' element ={  <Navigate to='/quotes'/>}/>
        
        <Route path='/quotes' element = {<RouterFinishedAllQuotes/>}/>
      
        <Route path='/quotes/:quoteId'element = {<RouterFinishedQuoteDetail/>}/>
         
     
        <Route path='/new-quote' element = {<RouterFinishedNewQuote/>}/>
         
       
        <Route path='*' element = { <RouterFinishedNotFound/>}/>
      
      </Routes>
    </RouterFinishedLayout>
  );
}

export default RouterFinished;

import { Route, Routes, Navigate } from 'react-router-dom';

import RouterAddDataAllQuotes from './pages/RouterAddDataAllQuotes';
import RouterAddDataQuoteDetail from './pages/RouterAddDataQuoteDetail';
import RouterAddDataNewQuote from './pages/RouterAddDataNewQuote';
import RouterAddDataLayout from './components/layout/RouterAddDataLayout';

function RouterAddData() {
  return (
    <RouterAddDataLayout>
      <Routes>
        <Route path='/' element={<Navigate to='/quotes' />}/>
          
        <Route path='/quotes' element={<RouterAddDataAllQuotes/>}/>
      
        <Route path='/quotes/:quoteId'element={<RouterAddDataQuoteDetail />}/>
          
        <Route path='/new-quote' element={<RouterAddDataNewQuote/>}/>
         
      </Routes>
    </RouterAddDataLayout>
  );
}

export default RouterAddData;

import { Route, Routes, Navigate } from 'react-router-dom';

import RouterRedirectWelcome from './pages/RouterRedirectWelcome';
import RouterRedirectProducts from './pages/RouterRedirectProducts';
import RouterRedirectProductDetail from './pages/RouterRedirectProductDetail';
import RouterRedirectMainHeader from './components/RouterRedirectMainHeader';

function RouterRedirect() {
  return (
    <div>
      <RouterRedirectMainHeader />
      <main>
        <Routes>
          <Route path='/' element = {<Navigate to='/welcome' />}/>
          
          <Route path='/welcome'  element = {<RouterRedirectWelcome/>}/>
            
          <Route path='/products'  element = {<RouterRedirectProducts/>}/>
         
          <Route path='/products/:productId' element = {<RouterRedirectProductDetail/>}/>
           
        </Routes>
      </main>
    </div>
  );
}

export default RouterRedirect;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book

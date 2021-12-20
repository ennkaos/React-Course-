import { Route,Routes } from 'react-router-dom';

import RouterRParamsWelcome from './pages/RouterRParamsWelcome';
import RouterRParamsProducts from './pages/RouterRParamsProducts';
import RouterRParamsProductDetail from './pages/RouterRParamsProductDetail';
import RouterRParamsMainHeader from './components/RouterRParamsMainHeader';

function RouterRParams() {
  return (
    <div>
      <RouterRParamsMainHeader />
      <main>
        <Routes>
        <Route path='/welcome'element= {<RouterRParamsWelcome />}/>
         
        <Route path='/products'element= {<RouterRParamsProducts />}/>

        <Route path='/product-detail/:productId'element= {<RouterRParamsProductDetail/>}/>
        
        </Routes>
      </main>
    </div>
  );
}

export default RouterRParams;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book

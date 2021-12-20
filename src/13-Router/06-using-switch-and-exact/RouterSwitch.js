import { Route, Routes } from 'react-router-dom';

import RouterSwitchWelcome from './pages/RouterSwitchWelcome';
import RouterSwitchProducts from './pages/RouterSwitchProducts';
import RouterSwitchProductDetail from './pages/RouterSwitchProductDetail';
import RouterSwitchMainHeader from './components/RouterSwitchMainHeader';

function RouterSwitch() {
  return (
    <div>
      <RouterSwitchMainHeader />
      <main>
        <Routes>
          <Route path='/welcome'element= {<RouterSwitchWelcome />}/>
        
          <Route path='/products' element= {<RouterSwitchProducts />}/>
         
          <Route path='/products/:productId'element= {<RouterSwitchProductDetail />}/>
          
        </Routes>
      </main>
    </div>
  );
}

export default RouterSwitch;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book

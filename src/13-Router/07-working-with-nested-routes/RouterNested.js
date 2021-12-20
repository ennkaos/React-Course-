import { Route,Routes} from 'react-router-dom';

import RouterNestedWelcome from './pages/RouterNestedWelcome';
import RouterNestedProducts from './pages/RouterNestedProducts';
import RouterNestedProductDetail from './pages/RouterNestedProductDetail';
import RouterNestedMainHeader from './components/RouterNestedMainHeader';

function RouterNested() {
  return (
    <div>
      <RouterNestedMainHeader />
      <main>
        <Routes>
          <Route path='/welcome'element= {<RouterNestedWelcome />}/>
         
          <Route path='/products' element= {<RouterNestedProducts />}/>
   
          <Route path='/products/:productId'element= {<RouterNestedProductDetail />}/>
           
          </Routes>
      </main>
    </div>
  );
}

export default RouterNested;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book

import { Route,Routes } from 'react-router-dom';

import RouterRoutesWelcome from './pages/RouterRoutesWelcome';
import RouterRoutesProducts from './pages/RouterRoutesProducts';


function RouterRoutes() {
  return (
      <Routes>
      <Route path="/welcome" element={<RouterRoutesWelcome />}/>
      <Route path="/products" element={<RouterRoutesProducts />}/>
      </Routes>
     
  );
}

export default RouterRoutes;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
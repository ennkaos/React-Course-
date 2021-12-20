import { Route,Routes } from 'react-router-dom';

import RouterNavLinksWelcome from './pages/RouterNavLinksWelcome';
import RouterNavLinksProducts from './pages/RouterNavLinksProducts';
import RouterNavLinksMainHeader from './components/RouterNavLinksMainHeader';

function RouterNavLinks() {
  return (
    <div>
      <RouterNavLinksMainHeader />
      <main>
         <Routes>
        <Route path='/welcome' element={<RouterNavLinksWelcome />}/>
        <Route path='/products' element={<RouterNavLinksProducts />}/>
          </Routes>
      </main>
    </div>
  );
}

export default RouterNavLinks;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component

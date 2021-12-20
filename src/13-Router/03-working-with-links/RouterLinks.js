import { Route,Routes } from 'react-router-dom';

import RouterLinksWelcome from './pages/RouterLinksWelcome';
import RouterLinksProducts from './pages/RouterLinksProducts';
import RouterLinksMainHeader from './components/RouterLinksMainHeader';

function RouterLinks() {
  return (
    <div>
      <RouterLinksMainHeader />
      <main>
        <Routes>
        <Route path='/welcome' element={<RouterLinksWelcome />}/>
        <Route path='/products'element={<RouterLinksProducts />}/>
        </Routes>
      </main>
    </div>
  );
}

export default RouterLinks;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component

import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Landing from './pages/landing/Landing';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import ProductsByCategory from './pages/products/ProductsByCategory';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';

import store from './redux/store';
import { RTL } from './theme/RTL';
import { theme } from './theme/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RTL>
          <div>
            <Router>
              <div>
                <Navbar />
                <Routes>
                  <Route exact path='/product/:id' element={<Product />} />
                  <Route
                    exact
                    path='/product/category/:id'
                    element={<ProductsByCategory />}
                  />
                  <Route exact path='/products' element={<Products />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/contact' element={<Contact />} />
                  <Route exact path='/login' element={<Login />} />
                  <Route exact path='/register' element={<Register />} />
                  <Route exact path='/' element={<Landing />} />
                </Routes>
              </div>
            </Router>
          </div>
        </RTL>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

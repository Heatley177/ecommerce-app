import { Provider } from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import store from './store';
import Orders from './pages/Orders/Orders';

function App() {
  return (
   
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/cart' element={<Cart /> } />
          <Route path='/orders' element={ <Orders /> } />
        </Routes>
        </Provider>
      </Router>
  
  );
}

export default App;

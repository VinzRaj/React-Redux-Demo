import './App.css';
import { NavBar } from './Components/nav-bar';
import { ProductList } from './Components/product-list';
import { SingleProduct } from './Components/single-product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from './Components/search';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Search />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route>404 not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

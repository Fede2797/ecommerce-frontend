import { Homepage } from './pages/Homepage';
import { ProductListPage } from './pages/ProductListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductPage } from './pages/ProductPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/products" Component={ProductListPage} />
        {/* <Route path="/products/:productId" Component={ProductPage} /> */}
        <Route path="/products/jordan" Component={ProductPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

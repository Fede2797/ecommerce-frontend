import { Homepage } from './pages/Homepage';
import { ProductListPage } from './pages/ProductListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/products" Component={ProductListPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

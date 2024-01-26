import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CategoryPage, 
  Homepage, 
  ProductListPage,  
  ProductPage,  
  UploadPage } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/products" Component={ProductListPage} />
        <Route path="/products/men" Component={() => (<CategoryPage category="men" />)} />
        <Route path="/products/women" Component={() => (<CategoryPage category="women" />)} />
        <Route path="/products/kids" Component={() => (<CategoryPage category="kids" />)} />
        {/* <Route path="/products/:productId" Component={ProductPage} /> */}
        <Route path="/product/jordan" Component={ProductPage} />
        <Route path="/admin/upload" Component={UploadPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

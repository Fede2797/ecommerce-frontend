import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CategoryPage, 
  Homepage, 
  ProductListPage,  
  ProductPage,  
  UploadPage,
  CartPage } from './pages';
import { AppProvider } from './AppProvider';

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/cart" Component={CartPage} />
          <Route path="/products" Component={ProductListPage} />
          <Route path="/products/men" Component={() => (<CategoryPage category="men" />)} />
          <Route path="/products/women" Component={() => (<CategoryPage category="women" />)} />
          <Route path="/products/kids" Component={() => (<CategoryPage category="kids" />)} />
          <Route path="/product/:productId" Component={ProductPage} />
          <Route path="/admin/upload" Component={UploadPage} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CategoryPage, 
  Homepage, 
  ProductListPage,  
  ProductPage,  
  UploadPage } from './pages';
import { AppProvider } from './AppProvider';

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/products" Component={ProductListPage} />
          <Route path="/products/men" Component={() => (<CategoryPage category="men" />)} />
          <Route path="/products/women" Component={() => (<CategoryPage category="women" />)} />
          <Route path="/products/kids" Component={() => (<CategoryPage category="kids" />)} />
          {/* <Route path="/products/:productId" Component={ProductPage} /> */}
          {/* <Route path="/product/jordan" Component={ProductPage} /> */}
          <Route path="/product/:productId" Component={ProductPage} />
          {/* <Route path="/product/:productId" Component={({params}) => (<ProductPage product={params.productId} />)} /> */}
          <Route path="/admin/upload" Component={UploadPage} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage, ProductListPage,  ProductPage,  UploadPage } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/products" Component={ProductListPage} />
        {/* <Route path="/products/:productId" Component={ProductPage} /> */}
        <Route path="/products/jordan" Component={ProductPage} />
        <Route path="/admin/upload" Component={UploadPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

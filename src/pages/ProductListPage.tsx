import { useEffect, useState } from 'react';
import { Layout } from '../layout/Layout';
import { ProductType } from '../types/AppTypes';
import { getEveryProduct } from '../api/getProducts';
import { Categories, ProductDisplay } from '../components';

export const ProductListPage = () => {
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [orderBy, setOrderBy] = useState('popularity');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getEveryProduct({ page: 1, limit: 40, sortBy: orderBy });
      setProducts(response.data);
      const length = response.data.length;
      setNumberOfResults(length);
    }

    fetchProducts();
  }, [orderBy]);

  return (
    <Layout>
      <div className='relative w-full flex flex-col items-start justify-start'>
        {/* Cathegories section */}
        <Categories />
        <ProductDisplay 
          products={products} 
          numberOfResults={numberOfResults} 
          orderBy={orderBy} 
          setOrderBy={setOrderBy} 
        />
      </div>
    </Layout>
  )
}
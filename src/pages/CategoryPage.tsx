
import { useEffect, useState } from 'react'
import { getCategoryProducts } from '../api/getProducts';
import { ProductType } from '../types/AppTypes';
import { Layout } from '../layout/Layout';
import { ProductDisplay } from '../components';

export const CategoryPage = ({category}: {category: string}) => {

  const [numberOfResults, setNumberOfResults] = useState(0);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [orderBy, setOrderBy] = useState('popularity');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getCategoryProducts({ page: 1, limit: 40, sortBy: orderBy, category });
      setProducts(response.data);
      const length = response.data.length;
      setNumberOfResults(length);
    }
    fetchProducts();
  }, [orderBy])

  return (
    <Layout>
      <ProductDisplay 
        products={products} 
        numberOfResults={numberOfResults} 
        orderBy={orderBy} 
        setOrderBy={setOrderBy} 
      />
    </Layout>
  );
}

import { useEffect, useState } from 'react';
import { Layout } from '../layout/Layout';
import { options } from '../config/constants';
import { ProductType } from '../types/AppTypes';
import { getEveryProduct } from '../api/getProducts';
import { ProductCard } from '../components/ProductCard';
import { Categories } from '../components/Categories';

export const ProductListPage = () => {
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [orderBy, setOrderBy] = useState('popularity');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getEveryProduct({ page: 1 });
      setProducts(response.data);
      const length = response.data.length;
      setNumberOfResults(length);
    }

    fetchProducts();
  }, [products, orderBy]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
  }

  return (
    <Layout>
      <div className='relative w-full flex flex-col items-start justify-start'>
        {/* Cathegories section */}
        <Categories />
        {/* Products section*/}
        <section className='pt-10 pb-20 m-auto max-w-[1200px]'>
          {/* Order display & info */}
          <div className='mb-10 flex justify-between'>
            {/* Showing all [numberOf] results */}
            <span className='font-poppins text-gray-text'>Showing all {numberOfResults} results</span>
            {/* Selector of order display*/}
            <div className='min-w-[190px]'>
              {/* select */}
              <select 
                id="order" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                value={orderBy}
                onChange={handleChange}
              >
                {
                  options.map( option => 
                    <option 
                      value={option.value}
                      id={option.value}
                      key={option.value}
                    >
                      {option.label}
                    </option> 
                  )
                }
              </select>
            </div>
          </div>
          {/* Product container */}
          <div className='w-full grid grid-cols-4 gap-[30px]'>
            {
              products?.map( prod => (
                <ProductCard key={prod._id} product={prod}/>
              ))
            }
          </div>
        </section>
      </div>
    </Layout>
  )
}

import { useEffect, useState } from 'react';
import { Layout } from '../layout/Layout';
import { ProductCard } from '../components/ProductCard';
import { hardcodedProducts } from '../data';
import { ProductType } from '../types/AppTypes';

const options =[
  { value: 'popularity', label: 'Popularity' },
  { value: 'pricelowhigh', label: 'Price Low to High' },
  { value: 'pricehighlow', label: 'Price High to Low' },
]

const categories = [
  { name: "Women", imgSource: 'url("/categories/women.jpg")'}, 
  { name: "Men", imgSource: 'url("/categories/men.jpg")'},
  { name: "Kids", imgSource: 'url("/categories/kids.jpg")'},
]

export const ProductListPage = () => {
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [orderBy, setOrderBy] = useState('popularity');

  useEffect(() => {
    setProducts(hardcodedProducts);
    const length = hardcodedProducts.length;

    setNumberOfResults(length);
  }, [products, orderBy]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setOrderBy(e.target.value);
  }


  return (
    <Layout>
      <div className='relative w-full flex flex-col items-start justify-start'>
        {/* Cathegories section */}
        <section className='m-auto max-w-[1200px]'>
          <h1 className='mt-12 font-poppins text-[40px] text-center'>Shop</h1>
          <ul className='flex gap-4'>
            {
              categories.map( category => (
                <li 
                  className={`w-[200px] h-[240px] flex flex-col justify-center text-center overflow-hidden  text-white text-lg font-semibold tracking-wider cursor-pointer select-none ${category.name === "Kids" ? "bg-cover bg-no-repeat bg-left" : ""}`} 
                  style={{backgroundImage: category.imgSource}}
                  key={category.name}
                >
                  <span className='drop-shadow-[0_0px_10px_rgba(0,0,0,.9)]'>{category.name}</span>
                </li>
              ))
            }
          </ul>
        </section>

        {/* Products */}
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
                <ProductCard product={prod}/>
              ))
            }
          </div>
        </section>

      </div>
    </Layout>
  )
}

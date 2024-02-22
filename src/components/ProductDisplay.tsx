import React from 'react'
import { options } from '../config/constants'
import { ProductType } from '../types/AppTypes'
import { ProductCard } from './ProductCard'

export const ProductDisplay = ({ products, numberOfResults, orderBy, setOrderBy } : {products: ProductType[], numberOfResults: number, orderBy: string, setOrderBy: (order: string) => void}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value)
  }

  return (
    <section className='w-full pt-10 pb-20 px-5 m-auto max-w-[1200px]'>
      {/* Order display & info */}
      <div className='mb-5 flex flex-col gap-5 justify-between items-center md:mb-10 md:flex-row md:gap-0'>
        {/* Showing all [numberOf] results */}
        <span className='order-2 font-poppins text-gray-text md:order-1'>Showing all {numberOfResults} results</span>
        {/* Selector of order display */}
        <div className='order-1 w-full md:order-2 md:w-auto md:min-w-[190px]'>
          {/* select */}
          <select
            id="order"
            className="border border-gray-300 text-gray-900 text-sm block w-full p-2"
            value={orderBy}
            onChange={handleChange}
          >
            {
              options.map(option =>
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
      <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-[30px]'>
        {
          products?.map(prod => (
            <ProductCard key={prod._id} product={prod}/>
          ))
        }
      </div>
    </section>
  )
}

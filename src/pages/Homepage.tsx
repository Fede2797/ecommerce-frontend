import { Layout } from '../layout/Layout'
import { ProductCard } from '../components'
import { useEffect, useState } from 'react'
import { getPopularProducts } from '../api/getProducts'
import { ProductType } from '../types/AppTypes'
import { Link } from 'react-router-dom'
import { frontUrl, productsRoute } from '../config/constants'

export const Homepage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getPopularProducts()
      setProducts(response.data)
    }

    fetchProducts()
  }, [])

  return (
    <Layout>
      <div className='relative w-full flex flex-col items-start justify-start'>
        {/* Image display section */}
        <section className='relative flex max-h-[calc(100vh-72px)] overflow-hidden items-center justify-center'>
          <img className='md:mb-20' src="bg-shoes.jpg" alt="" />
          <Link
            className='bottom-[5vh] w-[200px] h-14 bg-[#000] flex items-center justify-center text-white absolute z-10 md:bottom-[10vh] xl:bottom-[5vh] hover:bg-[#FFF] hover:text-[#000] transition-all duration-200 font-roboto tracking-[.35em] uppercase'
            to={frontUrl + productsRoute}
          >
            Shop now
          </Link>
        </section>

        {/* Products */}
        <section className='pt-10 pb-20 m-auto max-w-[1200px]'>

          <h1 className='mt-12 font-poppins text-[40px] text-center'>Popular</h1>
          <h2 className='mt-3 mb-14 font-poppins text-lg text-center text-gray-text'>Order the perfect shoes for your feet</h2>

          {/* Product container */}
          <div className='w-full grid grid-cols-4 gap-3'>
            {
              products?.map((prod: ProductType) => (
                <ProductCard key={prod.name} product={prod}/>
              ))
            }
          </div>
        </section>

      </div>
    </Layout>
  )
}

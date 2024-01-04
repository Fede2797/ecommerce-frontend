import { Layout } from './layout/Layout'
import { products } from '../data';
import { ProductCard } from './components/ProductCard';

function App() {

  return (
    <Layout>
      {/* Homepage */}
      <div className='relative w-full flex flex-col items-start justify-start'>
        {/* Image display section */}
        <section className='relative flex max-h-[calc(100vh-72px)] overflow-hidden items-center justify-center'>
          <img className='md:mb-20' src="bg-shoes.jpg" alt="" />
          <button className='bottom-[5vh] w-[200px] h-14 bg-[#000] text-white absolute z-10 md:bottom-[10vh] xl:bottom-[5vh] hover:bg-[#FFF] hover:text-[#000] transition-all duration-200 font-roboto tracking-[.35em] uppercase'>Shop now</button>
        </section>

        {/* Products */}
        <section className='pt-10 pb-20 m-auto max-w-[1200px]'>
          
          <h1 className='mt-12 font-poppins text-[40px] text-center'>Popular</h1>
          <h2 className='mt-3 mb-14 font-poppins text-lg text-center text-gray-text'>Order the perfect shoes for your feet</h2>

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

export default App

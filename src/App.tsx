import { Layout } from './layout/Layout'

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
        <section className='py-10 m-auto max-w-[1200px]'>
          
          <h1 className='mt-12 font-poppins text-[40px] text-center'>Products</h1>
          <h2 className='mt-3 mb-14 font-poppins text-lg text-center text-gray-text'>Order the perfect shoes for your feet</h2>

          {/* Product container */}
          <div className='w-full grid grid-cols-4 gap-[30px]'>

            {/* Product 1 */}
            <article className="group item w-[255px] max-h-[230px] shadow-[0px_4px_24px_0px_rgba(123,123,123,0.15)] hover:shadow-[0px_4px_30px_0px_rgba(123,123,123,0.35)] transition-all duration-200 cursor-pointer">
              <div className='h-[150px] overflow-hidden flex justify-center items-center bg-bg-gray'>
                <img
                  src="jordan.png"
                  alt=""
                  className="w-full max-w-full max-h-full duration-200 group-hover:scale-110"
                />
              </div>
              {/* Details */}
              <div className='w-full px-6 pb-4 pt-3 text-center h-20 flex flex-col justify-between'>
                {/* Product Name */}
                <span className='text-left font-poppins text-ellipsis overflow-hidden whitespace-nowrap'>Air Jordan shoes Nike</span>
                {/* Price */}
                <span className='text-right text-xl font-roboto text-green'>9.99$</span>
              </div>
            </article>

            {/* Product 1 */}
            <article className="group item w-[255px] max-h-[230px] shadow-[0px_4px_24px_0px_rgba(123,123,123,0.15)]">
              <div className='h-[150px] overflow-hidden flex justify-center items-center bg-bg-gray'>
                <img
                  src="jordan.png"
                  alt=""
                  className="w-full max-w-full max-h-full duration-200 group-hover:scale-110"
                />
              </div>
              {/* Details */}
              <div className='w-full px-6 pb-4 pt-3 text-center h-20 flex flex-col justify-between'>
                {/* Product Name */}
                <span className='text-left font-poppins text-ellipsis overflow-hidden whitespace-nowrap'>Air Jordan shoes Nike adshfasdf ajshdf aksdf</span>
                {/* Price */}
                <span className='text-right text-xl font-roboto text-green'>9.99$</span>
              </div>
            </article>

            {/* Product 1 */}
            <article className="group item w-[255px] max-h-[230px] shadow-[0px_4px_24px_0px_rgba(123,123,123,0.15)]">
              <div className='h-[150px] overflow-hidden flex justify-center items-center bg-bg-gray'>
                <img
                  src="jordan.png"
                  alt=""
                  className="w-full max-w-full max-h-full duration-200 group-hover:scale-110"
                />
              </div>
              {/* Details */}
              <div className='w-full px-6 pb-4 pt-3 text-center h-20 flex flex-col justify-between'>
                {/* Product Name */}
                <span className='text-left font-poppins text-ellipsis overflow-hidden whitespace-nowrap'>Air Jordan shoes Nike adshfasdf ajshdf aksdf</span>
                {/* Price */}
                <span className='text-right text-xl font-roboto text-green'>9.99$</span>
              </div>
            </article>

            {/* Product 1 */}
            <article className="group item w-[255px] max-h-[230px] shadow-[0px_4px_24px_0px_rgba(123,123,123,0.15)]">
              <div className='h-[150px] overflow-hidden flex justify-center items-center bg-bg-gray'>
                <img
                  src="jordan.png"
                  alt=""
                  className="w-full max-w-full max-h-full duration-200 group-hover:scale-110"
                />
              </div>
              {/* Details */}
              <div className='w-full px-6 pb-4 pt-3 text-center h-20 flex flex-col justify-between'>
                {/* Product Name */}
                <span className='text-left font-poppins text-ellipsis overflow-hidden whitespace-nowrap'>Air Jordan shoes Nike adshfasdf ajshdf aksdf</span>
                {/* Price */}
                <span className='text-right text-xl font-roboto text-green'>9.99$</span>
              </div>
            </article>

            {/* Product 1 */}
            <article className="group item w-[255px] max-h-[230px] shadow-[0px_4px_24px_0px_rgba(123,123,123,0.15)]">
              <div className='h-[150px] overflow-hidden flex justify-center items-center bg-bg-gray'>
                <img
                  src="jordan.png"
                  alt=""
                  className="w-full max-w-full max-h-full duration-200 group-hover:scale-110"
                />
              </div>
              {/* Details */}
              <div className='w-full px-6 pb-4 pt-3 text-center h-20 flex flex-col justify-between'>
                {/* Product Name */}
                <span className='text-left font-poppins text-ellipsis overflow-hidden whitespace-nowrap'>Air Jordan shoes Nike adshfasdf ajshdf aksdf</span>
                {/* Price */}
                <span className='text-right text-xl font-roboto text-green'>9.99$</span>
              </div>
            </article>


          </div>
        </section>

      </div>
    </Layout>
  )
}

export default App

import { Link } from 'react-router-dom'
import { ProductType } from '../types/AppTypes'
import { frontUrl, singleProductRoute } from '../config/constants'

export const ProductCard = ({ product }: {product: ProductType}) => {
  return (
    <Link to={ frontUrl + singleProductRoute + product._id }>
      <article className="group w-full max-h-[350px] transition-all duration-200 cursor-pointer relative overflow-hidden">
        <div className='aspect-square overflow-hidden flex justify-center items-center bg-[#F6F6F6]'>
          <img
            src={product.imgSource}
            alt={product.name}
            className="w-full max-w-[85%] duration-200"
            />
        </div>
        <div className='w-full py-2 text-center h-20 flex flex-col'>
          <span className='text-left font-medium font-roboto text-ellipsis overflow-hidden  whitespace-nowrap'>
            {product.name}
          </span>
          <span className='text-left font-roboto font-semibold'>
            ${product.price}
          </span>
        </div>
      </article>
    </Link>
  )
}

//       <article className="group w-full max-h-[350px] transition-all duration-200 cursor-pointer relative overflow-hidden">
//   <div className="w-full aspect-square overflow-hidden flex justify-center items-center bg-[#F6F6F6]">
//     <div className="">
//       <img
//         src={product.imgSource}
//         alt={product.name}
//         className="object-contain w-full h-full duration-200"
//       />
//     </div>
//   </div>
//   {/* Details */}
//   <div className="w-full py-2 text-center h-20 flex flex-col">
//     {/* Product Name */}
//     <span className="text-left font-medium font-roboto text-ellipsis overflow-hidden whitespace-nowrap">
//       {product.name}
//     </span>
//     {/* Price */}
//     <span className="text-left font-roboto font-semibold">
//       ${product.price}
//     </span>
//   </div>
// </article>

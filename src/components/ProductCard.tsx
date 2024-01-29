import { Link } from "react-router-dom"
import { ProductType } from "../types/AppTypes"
import { frontUrl, singleProductRoute } from "../config/constants"

export const ProductCard = ({product}: {product: ProductType}) => {
  return (
    <Link to={ frontUrl + singleProductRoute + product._id }>
      <article className="group w-[255px] max-h-[230px] shadow-[0px_4px_24px_0px_rgba(123,123,123,0.15)] hover:shadow-[0px_4px_30px_0px_rgba(123,123,123,0.35)] transition-all duration-200 cursor-pointer relative overflow-hidden">
        <div className='h-[150px] overflow-hidden flex justify-center items-center bg-bg-gray'>
          <img
            src={product.imgSource}
            alt={product.name}
            className="w-full max-w-[85%] duration-200 group-hover:scale-110"
            />
        </div>
        {/* Details */}
        <div className='w-full px-6 pb-4 pt-3 text-center h-20 flex flex-col justify-between'>
          {/* Product Name */}
          <span className='text-left font-poppins text-ellipsis overflow-hidden whitespace-nowrap'>
            {product.name}
          </span>
          {/* Price */}
          <span className='text-right text-xl font-roboto text-green'>
            ${product.price}
          </span>
        </div>
      </article>
    </Link>
  )
}

import { CartProduct } from '../../types/AppTypes'

export const CheckoutProductCard = ({ product }: {product: CartProduct}) => {
  return (
    <article className="flex gap-12">
      <figure className='relative w-[120px] h-[120px] flex justify-center items-center p-2 bg-bg-gray'>
        <div className="absolute w-5 h-5 flex items-center justify-center bg-green top-[-5px] right-[-5px] rounded-full text-white text-center">
          <span>
            {product.quantity}
          </span>
        </div>
        <img className='m-auto' src={product.imgSource} alt="" />
      </figure>
      <div className="flex flex-col font-poppins">
        <span className="font-medium">
          {product.name}
        </span>
        <span className="mt-3 font-semibold text-[21px] text-green">
          ${product.price}
        </span>
      </div>
    </article>
  )
}

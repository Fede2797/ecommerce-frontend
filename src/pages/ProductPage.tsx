import { Layout } from "../layout/Layout"
import { hardcodedProducts } from '../data';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useState } from "react";
import { SizeButton } from "../components/SizeButton";

export const ProductPage = () => {

  const prod = hardcodedProducts[0];

  const [sizeSelected, setSizeSelected] = useState<number | undefined>(40);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.FormEvent<HTMLInputElement>) => {
    const number = parseInt(e.currentTarget.value);
    if ( isNaN(number) || number === 0) return;

    setQuantity(number);
  }

  return (
    <Layout>
      <section className="w-full max-w-[1200px] p-4 m-auto flex justify-center gap-6">
        {/* Product image */}
        <div className="w-full flex justify-end">
          <figure className="flex justify-center items-center bg-[#F7F8FA] h-full">
            {/* Image-Zoom component */}
            <Zoom>
                <img
                  alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                  src={prod.fullImgSource}
                  width="500"
                />
            </Zoom>
          </figure>
        </div>
        {/* Product Details */}
        <ul className="w-full">
          {/* Shoes name */}
          <li className="text-[26px] font-medium line">
            Air Jordan shoes Nike
          </li>
          {/* Shoes description */}
          <li className="mt-3">
            Step into iconic style with Nike's Air Jordan shoes. Born from the legendary collaboration with Michael Jordan in 1985, these sneakers seamlessly blend cutting-edge tech with bold designs for on-court performance and off-court flair. With the iconic Jumpman logo and distinctive silhouettes, Air Jordans symbolize excellence and individuality, making a statement in both sports and style.
          </li>
          {/* Sizes container */}
          <li className="mt-3">
            <div className="max-w-[230px] grid grid-cols-5 grid-rows-2 gap-2">
              {
                prod.sizes.map( size => (
                  <SizeButton size={size} sizeSelected={sizeSelected} setSizeSelected={setSizeSelected}/>
                ))
              }
            </div>
          </li>
          {/* Price/Quantity/Add to cart buttons */}
          <li className="flex flex-col mt-2">
            <div className="flex gap-5 items-center">
              {/* Price */}
              <div className="text-[26px] text-green font-semibold tracking-tighter">
                ${prod.price}
              </div>
              {/* Quantity */}
              <div className="w-[80px] h-[30px] px-1 flex justify-around items-center text-lg border-[1px] border-green">
                <button 
                  className="w-full text-green"
                  onClick={() => quantity > 1 && setQuantity( quantity - 1 )}
                >
                  -
                </button>
                <input 
                  className="border-none w-full text-center focus:outline-none"
                  type="text" 
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button 
                  className="w-full text-green"
                  onClick={() => setQuantity( quantity + 1 )}
                >
                  +
                </button>
              </div>
            </div>
            {/* Add to cart button */}
            <button className="max-w-[350px] h-[42px] w-full mt-1 flex items-center justify-center gap-2 bg-green text-white rounded-[4px] text-[20px]">
              <span>
                <img className="invert-[100%]" src="/images/icon-cart.svg" alt="" />
              </span> 
              + Add to cart
            </button>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

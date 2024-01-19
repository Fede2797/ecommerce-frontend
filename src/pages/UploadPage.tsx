import { useEffect, useState } from "react";  
import { SyzeType } from "../types/AppTypes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const menSizes = [
  { size: 40, available: true },
  { size: 40.5, available: true },
  { size: 41, available: true },
  { size: 41.5, available: true },
  { size: 42, available: true },
  { size: 42.5, available: true },
  { size: 43, available: true },
  { size: 43.5, available: true },
  { size: 44, available: true },
  { size: 44.5, available: true }
];
const womenSizes = [
  { size: 35, available: true },
  { size: 35.5, available: true },
  { size: 36, available: true },
  { size: 36.5, available: true },
  { size: 37, available: true },
  { size: 37.5, available: true },
  { size: 38, available: true },
  { size: 38.5, available: true },
  { size: 39, available: true },
  { size: 39.5, available: true }
];
const kidsSizes = [
  { size: 34, available: true },
  { size: 34.5, available: true },
  { size: 35, available: true },
  { size: 35.5, available: true },
  { size: 36, available: true },
  { size: 36.5, available: true },
  { size: 37, available: true },
  { size: 37.5, available: true },
  { size: 38, available: true },
  { size: 38.5, available: true },
];

const SizeButton = ({size, toggleSizeAvailability}: {size: SyzeType, toggleSizeAvailability: ( sizeNumber: number) => void}) => {
  
  return (<button
    type="button"
    className={`w-10 h-10 flex justify-center items-center text-center rounded-[3px] border-[#D2D2D2] border-[1px] font-roboto font-normal tracking-tighter cursor-pointer duration-200
    ${
      size.available 
        ? ""
        : "bg-[#efefef] text-[#ADADAD] "
    }
    `}
    onClick={() => toggleSizeAvailability(size.size)}
  >
    {size.size}
  </button>);
};

export const UploadPage = () => {

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState('men');
  const [sizes, setSizes] = useState(menSizes);
  const [selectedImage, setSelectedImage] = useState<File>();

  const notify = () => toast.success("Product succesfully added");

  useEffect(() => {
    category === "men" && setSizes(menSizes);
    category === "women" && setSizes(womenSizes);
    category === "kids" && setSizes(kidsSizes);
  }, [category]);

  const resetFields = () => {
    setProductName("");
    setPrice("");
    setCategory("men");
    setSelectedImage(undefined);
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  }

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(event.target.files?.[0]);
  }
  
  const toggleSizeAvailability = ( sizeNumber: number ) => {
    const updatedSizes = sizes.map( size => {
      if (size.size === sizeNumber) {
        return {...size, available: !size.available}
      }

      return size;
    });

    setSizes(updatedSizes);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ( !(productName &&
      price &&
      category &&
      sizes &&
      selectedImage) ) {

      console.log("At least one field is missing");
      return;
    }

    const data = {
      name: productName,
      price: price,
      category: category,
      sizes: sizes,
      imgSource: selectedImage,
    }

    console.log(data);
    notify();
    resetFields();
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center font-normal">
      <form 
        className="w-full max-w-[400px] flex flex-col m-4 p-4 gap-3" 
        onSubmit={handleSubmit}
      >
        {/* Product name */}
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Product name</label>
            <input 
              type="text" 
              id="product_name" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="Product name"
              value={productName}
              onChange={handleNameChange}
              required
            />
        </div>
        {/* Product price */}
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Price</label>
            <input 
              type="text" 
              id="product_price" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="9.99"
              value={price}
              onChange={handlePriceChange}
              required
            />
        </div>
        {/* Product category */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
          <select 
            id="countries" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={category}
            onChange={handleChange}
          >
            <option value="men">Men</option>
            <option value="women">Woman</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        {/* Product sizes */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Available sizes</label>
          <li className="mt-3 max-w-[230px] grid grid-cols-5 grid-rows-2 gap-2">
            {
              sizes.map( size => (
                <SizeButton 
                  key={`${size.size}`}
                  size={size}
                  toggleSizeAvailability={toggleSizeAvailability}
                />
              ))
            }
          </li>
        </div>
        {/* Product image */}
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Upload image</label>
            <input 
              className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none" 
              aria-describedby="file_input_help" 
              id="file_input" 
              type="file"
              onChange={handleFileChange}
              required
            />
        </div>
        {/* Submit button */}
        <div className="flex justify-center mt-4">
            <button 
              className="bg-blue-600 border py-1 px-2 rounded-lg text-white hover:bg-blue-500 transition-all"
              type="submit"
            >
              Submit product
            </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

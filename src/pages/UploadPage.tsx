import { useEffect, useState } from "react";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postProduct } from "../api/postProduct";
import { menSizes, womenSizes, kidsSizes } from "../config/constants";
import { SizeButtonUpload } from "../components";

export const UploadPage = () => {

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState('men');
  const [sizes, setSizes] = useState(menSizes);
  const [selectedImage, setSelectedImage] = useState<File | null>();

  const notifySucces = () => toast.success("Product succesfully added");
  const notifyError = () => toast.error("There was a problem while uploading the product");

  useEffect(() => {
    category === "men" && setSizes(menSizes);
    category === "women" && setSizes(womenSizes);
    category === "kids" && setSizes(kidsSizes);
  }, [category]);

  const resetFields = () => {
    setProductName("");
    setPrice("");
    setCategory("women");
    setCategory("men");
    setSelectedImage(null);
  }

  const handleTargetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
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

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ( !(productName &&
      price &&
      category &&
      sizes &&
      selectedImage) ) {
      return;
    }

    const data = {
      name: productName,
      price: price,
      category: category,
      sizes: sizes,
      imgSource: selectedImage,
    }
    
    const responseStatus = await postProduct(data);

    if (responseStatus === 200) {
      notifySucces();
    } else {
      notifyError();
    }
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
              onChange={handleTargetChange}
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
              onChange={handleTargetChange}
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
                <SizeButtonUpload 
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

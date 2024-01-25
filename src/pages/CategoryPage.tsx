
import { useEffect, useState } from 'react'
import { getCategoryProducts } from '../api/getProducts';

export const CategoryPage = ({category}: {category: string}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getCategoryProducts(category);
      console.log("response" + response.data);
      setProducts(response.data);
    }
    fetchProducts();
  }, [])

  return (
    <div>
      {/* <h2>{`${category.charAt(0).toUpperCase()}${category.slice(1)} Category Information`}</h2> */}
      {/* {products.map((prod) => (
        <div key={prod._id}>{prod.name}</div>
      ))} */}
    </div>
  );
}

import { Link } from 'react-router-dom'
import { categories, frontUrl, kidsRoute, menRoute, womenRoute } from '../config/constants'

export const Categories = () => {
  return (
    <section className='m-auto max-w-[1200px]'>
      <h1 className='mt-12 font-poppins text-[40px] text-center'>Shop</h1>
      <ul className='flex gap-4'>
        {
          categories.map( category => {
            let linkTo = frontUrl;
            switch (category.name) {
              case "women":
                linkTo += womenRoute;
                break;
              case "men":
                linkTo += menRoute;
                break;
              case "kids":
                linkTo += kidsRoute;
                break;
            }

            return (
              <Link 
                to={linkTo}
                key={category.name}
              >
                <li 
                  className={`relative group w-[200px] h-[240px] flex flex-col justify-center text-center overflow-hidden  text-white text-lg font-semibold tracking-wider cursor-pointer select-none ${category.name === "Kids" ? "bg-cover bg-no-repeat bg-left" : ""}`} 
                  style={{backgroundImage: category.imgSource}}
                >
                  <div className='absolute w-[200px] h-[240px] left-0 top-0 bg-[#000] bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20'></div>
                  <span className='drop-shadow-[0px_0px_10px_rgba(0,0,0,.9)] group-hover:scale-125 transition-all duration-300'>
                    {/* This string is built like this to capitalize the first letter of the category*/}
                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                  </span>
                </li>
              </Link>
              )
            }
          )
        }
      </ul>
    </section>
  )
}

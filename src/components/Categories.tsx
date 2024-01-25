import { categories } from '../config/constants'

export const Categories = () => {
  return (
    <section className='m-auto max-w-[1200px]'>
      <h1 className='mt-12 font-poppins text-[40px] text-center'>Shop</h1>
      <ul className='flex gap-4'>
        {
          categories.map( category => (
            <li 
              className={`w-[200px] h-[240px] flex flex-col justify-center text-center overflow-hidden  text-white text-lg font-semibold tracking-wider cursor-pointer select-none ${category.name === "Kids" ? "bg-cover bg-no-repeat bg-left" : ""}`} 
              style={{backgroundImage: category.imgSource}}
              key={category.name}
            >
              <span className='drop-shadow-[0_0px_10px_rgba(0,0,0,.9)]'>{category.name}</span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

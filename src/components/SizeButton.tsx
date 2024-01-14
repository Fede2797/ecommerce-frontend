import { SyzeType } from "../types/AppTypes"

export const SizeButton = ({size, sizeSelected, setSizeSelected}: {size: SyzeType, sizeSelected: any, setSizeSelected:any}) => {
  return (
    <button 
      key={size.size}
      className={`w-10 h-10 flex justify-center items-center text-center rounded-[3px] border-[#D2D2D2] border-[1px] font-roboto font-normal tracking-tighter cursor-pointer duration-200
      ${ sizeSelected === size.size 
        ? "border-none bg-[#000] text-[#FFF]"
        : "" 
      }
      ${
        size.available 
          ? ""
          : "bg-[#efefef] text-[#ADADAD] "
      }
      `}
      onClick={ () => setSizeSelected(size.size) }
      disabled={ size.available ? false : true }
    >
      {size.size}
    </button>
  )
}

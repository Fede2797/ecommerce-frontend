import { SyzeType } from '../types/AppTypes'

export const SizeButtonUpload = ({ size, toggleSizeAvailability }: {size: SyzeType, toggleSizeAvailability: (sizeNumber: number) => void}) => {
  return (<button
    type="button"
    className={`w-10 h-10 flex justify-center items-center text-center rounded-[3px] border-[#D2D2D2] border-[1px] font-roboto font-normal tracking-tighter cursor-pointer duration-200
    ${
      size.available
        ? ''
        : 'bg-[#efefef] text-[#ADADAD] '
    }
    `}
    onClick={() => toggleSizeAvailability(size.size)}
  >
    {size.size}
  </button>)
}

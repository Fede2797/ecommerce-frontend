import { useEffect, useState } from 'react'
import { checkoutBreadcrumbs, cartRoute, checkoutSection, frontUrl } from '../../config/constants'
import { Link } from 'react-router-dom'

export const CheckoutBreadcrumbs = ({ section }: {section: string}) => {
  const [sectionPosition, setSectionPosition] = useState(0)

  useEffect(() => {
    switch (section) {
      case checkoutSection.DETAILS:
        setSectionPosition(0)
        break
      case checkoutSection.SHIPPING:
        setSectionPosition(1)
        break
      case checkoutSection.PAYMENT:
        setSectionPosition(2)
        break
      case checkoutSection.CONFIRM:
        setSectionPosition(3)
        break
      default:
        setSectionPosition(0)
        break
    }
  }, [section])

  return (
    <ul className="mb-4 flex items-center gap-3 font-medium">
      <li className='text-green'>
        <Link to={ sectionPosition !== 3 ? frontUrl + cartRoute : '#' }>
          Cart
        </Link>
      </li>
      <img className="h-[10px]" src="/chevron-right.svg" alt="" />
      {
        checkoutBreadcrumbs.map((item, index) => (
          <div className='flex gap-3 items-center' key={index}>
            <li
              className={`transition-all ${index < sectionPosition
                          ? 'text-green'
                          : sectionPosition === index
                            ? 'text-[#000] semibold'
                            : 'text-[#616161]'}`}
            >
              <Link
                className={`${index <= sectionPosition ? 'cursor-pointer' : 'cursor-default'}`}
                to={(index < sectionPosition && sectionPosition !== 3) ? item.route : '#'}
              >
                {item.name}
              </Link>
            </li>
            <img className="h-[10px]" src="/chevron-right.svg" alt="" />
          </div>
        ))
      }
    </ul>
  )
}

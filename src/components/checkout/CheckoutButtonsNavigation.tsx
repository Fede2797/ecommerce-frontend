import { useEffect, useState } from 'react'
import { checkoutButtons, checkoutSection } from '../../config/constants'
import { Link } from 'react-router-dom'

interface ButtonsType {
   id: string,
   backButtonName: string,
   backButtonRoute: string,
   forwardButtonName: string,
   forwardButtonRoute: string
}

export const CheckoutButtonsNavigation = ({ section }: {section: string}) => {
  const [buttons, setButtons] = useState<ButtonsType>()

  useEffect(() => {
    switch (section) {
      case checkoutSection.DETAILS:
        setButtons(checkoutButtons[0])
        break
      case checkoutSection.SHIPPING:
        setButtons(checkoutButtons[1])
        break
      case checkoutSection.PAYMENT:
        setButtons(checkoutButtons[2])
        break
      default:
        setButtons(checkoutButtons[0])
        break
    }
  }, [section])

  return (
    <nav className={`mt-[60px] flex text-lg items-center ${section === checkoutSection.CONFIRM ? 'hidden' : ''}`}>
      <div className="w-full">
        <Link to={buttons ? '/' + buttons.backButtonRoute : '#'}>
          <span className="text-md underline text-green cursor-pointer">
            {buttons?.backButtonName}
          </span>
        </Link>
      </div>
      <Link className='w-full flex items-center justify-center font-medium text-white bg-green h-10 rounded-[4px]' to={buttons ? '/' + buttons.forwardButtonRoute : '#'}>
        <span>
          {buttons?.forwardButtonName}
        </span>
      </Link>
    </nav>
  )
}

import { FC, ReactNode, useState } from 'react'

interface AccordionProps {
  controllerElement: (isExpanded: boolean) => ReactNode;
  children: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ controllerElement, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}
      >
        {controllerElement(isExpanded)}
      </div>
      {isExpanded && <div>{children}</div>}
    </>
  )
}

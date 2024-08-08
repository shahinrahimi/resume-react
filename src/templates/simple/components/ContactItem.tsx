import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
interface ContactItemProp {
    value : string,
    icon: IconProp
}
export const ContactItem:React.FC<ContactItemProp> = ({value, icon}) => {
  return (
    <li className="flex flex-row gap-2 items-center">
        <div className="bg-black h-5 w-5 grid place-content-center rounded-full">
            <FontAwesomeIcon color="#fff" icon={icon} width={8} height={8} />
        </div>
        <p className='text-sm'>{value}</p>
    </li>
)
}

import React from 'react'
interface LanguageItemProps {
    lang: string,
    lvl: string,
}
export const LanguageItem:React.FC<LanguageItemProps> = ({lang, lvl}) => {
  return (
    <li>
        <p className="capitalize font-bold mb-0 pb-0">{lang}</p>
        <p className="capitalize text-sm font-light">{lvl}</p>
    </li>
  )
}

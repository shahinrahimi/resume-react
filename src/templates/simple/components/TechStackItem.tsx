import React from 'react'
interface TechStackItemProp {
    title: string
}

export const TechStackItem:React.FC<TechStackItemProp> = ({title}) => {
  return (
    <div className="bg-zinc-50 text-xs grid place-content-center p-1 text-center items-center">{title}</div>
  )
}

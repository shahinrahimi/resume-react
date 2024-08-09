import React from 'react'
interface SectionProps {
    children: React.ReactNode
    isDark : Boolean
    title: string
}
export const Section:React.FC<SectionProps> = ({children, isDark, title}) => {
  return (
    <section className="mb-2 flex flex-col text-sm">
        <h2 className="text-base font-thin tracking-wider uppercase">{title}</h2>
        <div className={`h-[calc(1px)] w-full mb-2 rounded-full text-zinc-200 ${isDark ? "bg-white" : "bg-zinc-200"}`}>.</div>
        {children}
    </section>
  )
}

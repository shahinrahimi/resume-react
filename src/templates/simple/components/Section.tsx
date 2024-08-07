import React from 'react'
interface SectionProps {
    children: React.ReactNode
    isDark : Boolean
    title: string
}
export const Section:React.FC<SectionProps> = ({children, isDark, title}) => {
  return (
    <section className="mb-2 flex flex-col gap-1">
        <h2 className="text-lg uppercase mt-2">{title}</h2>
        <div className={`h-1 w-full mb-1 rounded-full text-zinc-200 ${isDark ? "bg-white" : "bg-zinc-200"}`}>.</div>
        {children}
    </section>
  )
}

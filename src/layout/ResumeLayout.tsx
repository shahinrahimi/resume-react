import React from "react";
import './resume_layout.css'

interface ResumeLayoutProps {
    children : React.ReactNode
}

const ResumeLayout = React.forwardRef<HTMLDivElement, ResumeLayoutProps>(({ children }, ref) => {
    return (
        <div className="resume mx-auto" ref={ref}>
            {children}
        </div>
    )
})

export default ResumeLayout;
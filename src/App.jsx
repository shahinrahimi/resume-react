import React from 'react'
import Simple from './templates/Simple'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import './App.css'
import './templates/simple.css'

function App() {
  const resumeRef = React.useRef()

  const handleGeneretePdf = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297)
      pdf.save('resume.pdf')
    })
  }

  return (
    <div className='bg-yellow-400'>
      <div ref={resumeRef} className='bg-red-400 resume' >
        <Simple />
      </div>
      <button onClick={handleGeneretePdf}>Generate PDF</button>
    </div>
  )
}

export default App

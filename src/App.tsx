import React from "react"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ResumeLayout from "./layout/ResumeLayout";
import Simple from "./templates/simple/Simple";
import { data } from "./types";

function App() {

  const resumeRef = React.useRef<HTMLDivElement>(null)
  const handleGeneratePdf = () => {
    const input = resumeRef.current;
    if (input) {
      html2canvas(input, { scale: 2, useCORS: true })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
      });
    }
  }

  return (
    <div className='bg-cyan-600'>
      <ResumeLayout ref={resumeRef} >
        <Simple data={data} />
      </ResumeLayout>
      <button className="mx-auto mt-8 w-80 h-10 grid place-content-center bg-black text-white" onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  )
}

export default App

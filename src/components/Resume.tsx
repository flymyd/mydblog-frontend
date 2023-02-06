import {FC, useState} from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.js?url';
import {Document, Page} from 'react-pdf/dist/esm/entry.vite';
import {pdfjs} from "react-pdf";
import useWindowWidth from "@/hooks/useWindowWidth";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
const resumeUrl = 'https://mydblog.obs.cn-east-3.myhuaweicloud.com/resume.pdf'
const Resume: FC = () => {
  const [numPages, setNumPages] = useState(null);
  const windowWidth = useWindowWidth();

  function onDocumentLoadSuccess({numPages}: { numPages: any }) {
    setNumPages(numPages);
  }

  return (
    <Document file={resumeUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
      {Array.from(new Array(numPages), (el, index) => <Page key={`page_${index + 1}`} pageNumber={index + 1}
                                                            width={windowWidth < 980 ? windowWidth * 0.9 : 980}/>)}
    </Document>
  )
}
export default Resume;
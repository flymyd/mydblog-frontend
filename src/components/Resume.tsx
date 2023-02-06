import {FC, useEffect, useState} from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.js?url';
import {Document, Page} from 'react-pdf/dist/esm/entry.vite';
import {pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
const resumeUrl = 'https://mydblog.obs.cn-east-3.myhuaweicloud.com/resume.pdf'
const Resume: FC = () => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(0);
  const resizeUpdate = (e: any) => {
    // 通过事件对象获取浏览器窗口的高度
    let w = e.target.innerWidth;
    setWidth(w);
  };
  useEffect(() => {
    let w = window.innerWidth;
    setWidth(w)
    window.addEventListener('resize', resizeUpdate);
    return () => {
      window.removeEventListener('resize', resizeUpdate);
    }
  }, []);
  function onDocumentLoadSuccess({numPages}: { numPages: any }) {
    setNumPages(numPages);
  }

  return (
    <Document file={resumeUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
      {Array.from(new Array(numPages), (el, index) => <Page key={`page_${index + 1}`} pageNumber={index + 1}
                                                            width={width < 736 ? width * 0.9 : 736}/>)}
    </Document>
  )
}
export default Resume;
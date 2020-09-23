import React, {useState} from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import alport from './portfolio.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Flip (){

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

   function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1)
  }

   function changePage(change){
   	setPageNumber(prevPageNumber=>prevPageNumber + change)
   }

   function nextPage(){
   	changePage(1)
   }
   function prevPage(){
   	changePage(-1)
   }


return (
<div className="portfolios">
<Document file ={alport}
 onLoadSuccess={onDocumentLoadSuccess}
>
<Page pageNumber={pageNumber}/>
</Document>
<button onClick={prevPage}>
Previous Page
</button>
<button onClick = {nextPage}>
Next Page
</button>
<p>Page {pageNumber} of {numPages}</p>
</div>
)
}



export default Flip
import html2pdf from 'html2pdf.js';
import { HiOutlineDownload } from 'react-icons/hi';
import { Tooltip } from 'react-tooltip';

function ConvertToPdf(props) {
  const text = props.text;
  const language = props.languege;
  console.log(language);
  function convertPdf() {
    // Create a new div element to hold the text content
    const contentDiv = document.createElement('div');
    console.log(language == 'Hebrew');
    if (language == 'Hebrew')
      {contentDiv.style.direction = 'rtl'; // Set text direction to RTL for Hebrew
      console.log("if");  
      }
    // Loop through the characters in the text array
    text.forEach((charInfo) => {
      const charElement = document.createElement('span');
      charElement.textContent = charInfo.char;

      // Apply styles to the character element
      const { color, fontSize, fontFamily, textDecoration } = charInfo.style;
      charElement.style.color = color;
      charElement.style.fontSize = fontSize;
      charElement.style.fontFamily = fontFamily;
      charElement.style.textDecoration = textDecoration;

      // Append the character element to the content div
      contentDiv.appendChild(charElement);
      if (charInfo.char === '\n') {
        contentDiv.appendChild(document.createElement('br'));
      }
    });

    // Configure html2pdf options
    const options = {
      margin: 10,
      filename: 'converted.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Use html2pdf to convert the div content to PDF
    // html2pdf().from(contentDiv).set(options).outputPdf();
    html2pdf(contentDiv, options);
  }

  return (
    <div className="Convert_To_Pdf" id="Convert_To_Pdf" data-tooltip-id="Convert-to-PDF" data-tooltip-content="Convert to PDF">
      <button onClick={convertPdf}><HiOutlineDownload></HiOutlineDownload></button>
      <Tooltip id="Convert-to-PDF" className='common-tooltip' />
    </div>
  );
}

export default ConvertToPdf;

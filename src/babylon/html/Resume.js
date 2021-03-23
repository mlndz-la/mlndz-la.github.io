import resumePDF from "./images/pdf.png";
import pdf from "../../../public/Erick_Melendez_Resume.pdf";

const resume = () => {
  // create html
  const html = `
    <div class='flex_column resume_container'>
      <div class='flex_row resume_title_name'>
        <h1 class='title resume_header_title'>Resume:</h1>
        <a class='link' href='${pdf}' target="_blank">
          <h1 title='Download Link' class='title link glitch_header'>Download Link</h1>
        </a>
      </div>
      <image class='resume_image round_corner' src='${resumePDF}' alt='resume'></image>
    </div>
  `;

  return html;
};

export default resume;

const resumePDF =
  "https://raw.githubusercontent.com/mlndz-la/pwAssets/main/Erick_Melendez_Resume.pdf";
const resumeImage = "https://raw.githubusercontent.com/mlndz-la/pwAssets/main/pdf.png";

const resume = () => {
  // create html
  const html = `
    <div class='flex_column resume_container'>
      <div class='flex_row resume_title_name'>
        <h1 class='title resume_header_title'>Resume:</h1>
        <a class='link' href='${resumePDF}' target="_blank">
          <h1 title='Download Link' class='title link glitch_header'>Download Link</h1>
        </a>
      </div>
      <image class='resume_image round_corner' src='${resumeImage}' alt='resume'></image>
    </div>
  `;

  return html;
};

export default resume;

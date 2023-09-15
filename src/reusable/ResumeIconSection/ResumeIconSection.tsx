import { websiteAssets } from '../../data/WebsiteAssets';
import './ResumeIconSection.css'
import pdf from "../../reusable/Erick_Melendez_UI_Designer_2023.pdf"


export const ResumeIconSection = () => {
  const { pdfIcon } = websiteAssets;

  return (
    <div className='resume_icon_section__container'>
      <img className='resume_icon_section__img' src={pdfIcon} onClick={() => {window.open(pdf)}} />
      <h4 className='resume_icon_section__text'><a href={pdf} rel='noreferrer' target='_blank'>Resume-Erick-Melendez.pdf</a></h4>
    </div>
  );
}
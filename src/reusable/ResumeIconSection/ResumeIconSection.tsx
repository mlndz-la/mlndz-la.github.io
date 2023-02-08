import { websiteAssets } from '../../data/WebsiteAssets';
import './ResumeIconSection.css'

export const ResumeIconSection = () => {
  const { pdfIcon } = websiteAssets;

  return (
    <div className='resume_icon_section__container'>
      <img className='resume_icon_section__img' src={pdfIcon} />
      <h4 className='resume_icon_section__text'>Resume-Erick-Melendez.pdf</h4>
    </div>
  );
}
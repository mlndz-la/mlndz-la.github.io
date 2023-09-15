import { ResumeIconSection } from '../ResumeIconSection';
import './GetInTouch.css'

export const GetInTouch = () => {
  const openMail = () => {
    window.location.href = "mailto:e.melendez.designer@gmail.com?subject=Job Opportunity";
  }
  return (
    <div className='get_in_touch__container'>
      <h2 className='get_in_touch__title'>Get In Touch</h2>
      <button className='get_in_touch__button' onClick={openMail}>e.melendez.designer@gmail.com</button>
      <ResumeIconSection />
    </div>
  );
}
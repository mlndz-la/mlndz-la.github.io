import { GetInTouch } from './reusable/GetInTouch'
import { websiteAssets } from './data/WebsiteAssets'
import './Contact.css'

export const Contact = () => {
  const { profilePic } = websiteAssets;
  return (
    <div className='contact_page__container'>
      <h2 className='contact_page__title'>Contact</h2>
      <div className='contact_info__container'>
        <div className='contact_info_text__container'>
          <h2 className='contact_info_text__title'>Erick Melendez</h2>
          <p className='contact_info_text__p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. </p>
          <p className='contact_info_text__p'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
        </div>
        <img className='contact_info__img' src={profilePic} />
      </div>
      <GetInTouch />
    </div>
  );
}

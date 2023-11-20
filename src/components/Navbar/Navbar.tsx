import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import pdf from "../../reusable/Erick_Melendez_UI_UX_2023_Resume.pdf"

export const Navbar = () => {
  const navigate = useNavigate()

  const goToHome = () => navigate('/')
  const goToWork = () => navigate('/work')
  const goToContact = () => navigate('/contact')


  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a className="navbar_logo" onClick={goToHome}>Erick Melendez</a>
        <div className="navbar_links_container">
          <a className="navbar_link" onClick={goToWork}>Work</a>
          <a className="navbar_link" href={pdf} rel='noreferrer' target='_blank'>Resume</a>
          <a className="navbar_link" onClick={goToContact}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

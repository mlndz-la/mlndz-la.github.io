import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate()

  const goToHome = () => navigate('/')
  const goToWork = () => navigate('/work')
  const goToResume = () => navigate('/resume')
  const goToContact = () => navigate('/contact')

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a className="navbar_logo" onClick={goToHome}>Erick Melendez</a>
        <div className="navbar_links_container">
          <a className="navbar_link" onClick={goToWork}>Work</a>
          <a className="navbar_link" onClick={goToResume}>Resume</a>
          <a className="navbar_link" onClick={goToContact}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1 className="header-link">Alec Eiber</h1>
        </Link>
      </div>
      <div className="header-link-container">
        <a href="/resume-v3.pdf" className="header-link">
          Resume
        </a>
        <Link to="/projects" className="header-link">
          Projects
        </Link>
        <Link to="/contact" className="header-link">
          Contact
        </Link>
        <a href="https://www.linkedin.com/in/aleceiber" className="header-link">
          LinkedIn
        </a>
        <a href="https://www.github.com/a-eiber" className="header-link">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Header;

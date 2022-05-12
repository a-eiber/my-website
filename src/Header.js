import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1 className="header-link">Alec Eiber</h1>
        </Link>
      </div>
      <div>
        <a href="/resume-v2.pdf" className="header-link">
          Resume
        </a>
        <Link to="/projects" className="header-link">
          Projects
        </Link>
        <Link to="/contact" className="header-link">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;

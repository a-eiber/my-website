import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="errorPage">
      <div>
        <img src="/error.png" alt="error" className="error-image" />
      </div>
      <div>
        <h1>I have bad news for you</h1>
        <p>The page you are looking for might be removed or is temporarily unavailable</p>
        <Link to="/" className="btn">
          <button type="button">Come Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;

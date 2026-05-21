import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" className="home-button">
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
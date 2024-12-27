import React from 'react';
import { useNavigate } from 'react-router-dom';


const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <button onClick={handleGoHome} className="btn btn-primary">
        Go to Homepage
      </button>
    </div>
  );
};

export default PageNotFound;

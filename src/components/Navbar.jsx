import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
 // Import the updated CSS
import logo from '../assets/logo.png'; // Import the logo

const Navbar = () => {
  const navigate = useNavigate();

  // Navigate to the QuizApp page
  const handleQuizClick = () => {
    navigate('/quiz');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container p-4">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Quiz Logo" className="navbar-logo" />
          <span className="ms-2 ">BrainBooster </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobseekers">
                JobSeekers
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-primary" onClick={handleQuizClick}>
            Try Quiz
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

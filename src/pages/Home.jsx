import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/quiz'); // Navigate to the quiz page when the button is clicked
      };
  return (
    <div className="Home">
     <h1>Welcome to the Quiz App!</h1>
      <p>Test your knowledge with a fun quiz.</p>
      <button onClick={startQuiz} className="start-quiz-btn" >
        Start Quiz
      </button>
    </div>
  )
}

export default Home

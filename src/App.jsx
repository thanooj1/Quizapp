import React from 'react';
import { Routes,Route,useLocation } from 'react-router-dom'
import QuizApp from './components/QuizApp';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './pages/Home';
import JobSeekers from './pages/Jobseekers';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';

const App = () => {
  const location=useLocation();

  const isQuizPage=location.pathname==='/quiz';

  return (
    <>
    {/* conditionally render Navbar */}
      {!isQuizPage && <Navbar />}
      
      {/* routing setup start */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        
        <Route path='/jobseekers' element={<JobSeekers/>}/>
        <Route path='/quiz' element={<QuizApp/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      {/* routing setup end */}
      {/* conditionally render  Footer */}
  
    </>
    
  )
}


export default App;


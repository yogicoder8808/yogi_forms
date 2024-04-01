import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from './Forms';
import SubmittedFormPage from './SubmittedForms';
import { FormProvider } from './FormContext';

function App() {
  return(
    <Router>
      <FormProvider>
      <div>
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to = "/form">Form</Link>
            </li>
            <li>
              <Link to = "/submitted">Submitted Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element = { <FormPage />} />
          <Route path='/submitted' element = { <SubmittedFormPage />} />
        </Routes>
      </div>
      </FormProvider>
    </Router>
  )
}

function Home(){
    return <h2 style={ {color:'chocolate', padding: 20}}> Home Page</h2>
}

export default App;

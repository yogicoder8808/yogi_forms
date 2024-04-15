import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from './Forms';
import SubmittedFormPage from './SubmittedForms';
import { FormProvider } from './FormContext';
import SuccessPage from './SuccessPage';
import ConflictPage from './ConflictPage';

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
            <li>
              <Link to = "/success">Success</Link>
            </li>
            <li>
              <Link to = "/conflict">Conflict</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element = { <FormPage />} />
          <Route path='/submitted' element = { <SubmittedFormPage />} />
          <Route path='/success' element = { <SuccessPage />} />
          <Route path='/conflict' element = { <ConflictPage />} />
        </Routes>
      </div>
      </FormProvider>
    </Router>
  )
}

function Home(){
    return (
      <div>
        <h2 style={ {color:'chocolate', padding: 20}}> Home Page</h2>
        <h3 style={ {textAlign: 'justify', paddingRight:200 } }> Follow the links to submit the form</h3>
     </div>
    )


}

export default App;

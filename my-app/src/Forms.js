import React, { useState } from "react";
import { useFormContext } from "./FormContext";


function FormPage (){
    const { addSubmittedForm } = useFormContext()
    const [formData, SetFormData] = useState({
        name : '',
        email : '',
        message : ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        SetFormData (prevData => ({...prevData, [name] : value }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault ()
        console.log (formData)
        addSubmittedForm (formData)
        window.alert ('Form Submitted Successfully')
        SetFormData ({name:'', email:'', message:''})
      }

      
      return (
              <div className="App">
                  <h1>Responsive Form</h1>
                  <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                      <label> Name: 
                      <input 
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                  </label>
                </div>
      
                    <div className='form-group'>
                      <label> Email:
                      <input 
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      </label>
                    </div>
      
                <div className='form-group'>
                  <label>Message:
                  <textarea 
                    name = 'message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  </label>
                </div>
              <button type='submit'> Submit </button>
        </form>
          
              </div>
    
      );
    }
export default FormPage;
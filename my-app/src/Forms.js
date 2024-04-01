import React, { useState } from "react";
import { useFormContext } from "./FormContext";
import { Navigate } from "react-router-dom";


function FormPage (){
    const { addSubmittedForm } = useFormContext()
    const [formData, SetFormData] = useState({
        name : '',
        email : '',
        message : '',
        attachment: null
      });

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isConflict, setIsConflict] = useState (false)
    
      const handleChange = (e) => {

        const {name, value, files } = e.target;
        if (name === 'attachment') {
          SetFormData (prevData => ({...prevData, [name] : files[0] }))
        } else {
          SetFormData (prevData => ({...prevData, [name] : value }))
        }
      }  
   
    
      // const handleSubmit = (e) => {
      //   e.preventDefault ()
      //   console.log (formData)
      //   addSubmittedForm (formData)
      //   window.alert ('Form Submitted Successfully')
      //   SetFormData ({name:'', email:'', message:'', attachment: null})
      // }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const response = await submitForm (formData)
          addSubmittedForm(formData)
          setIsSubmitted(true)
        }catch (error) {
          setIsConflict(true)
        }
      }

      const submitForm = async (formData) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve ({ success: true})
        },1000)
      })
    }

      if (isSubmitted) {
        return <Navigate to = "/Success" />
      }

      if (isConflict) {
        return <Navigate to = "/conflict" />
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

                    <div className='form-group'>
                      <label> Attachment:
                      <input 
                        type='file'
                        name='attachment'
                        onChange={handleChange}
                        accept="image/, .pdf, .doc, .docx, .txt"
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
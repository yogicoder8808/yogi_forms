
import React, { createContext, useContext, useState} from "react";

const FormContext = createContext()

export function useFormContext (){
    return useContext (FormContext)
}

export function FormProvider ( {children}) {
    const [submittedForms, setSubmittedForms] = useState ([])

    const addSubmittedForm = (formData) => {
        setSubmittedForms (prevForms => [...prevForms, formData])
}

return(
    <FormContext.Provider value={{ submittedForms, addSubmittedForm}}>
        {children}
    </FormContext.Provider>
)
}
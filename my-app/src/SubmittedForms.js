import React from "react";
import { useFormContext } from "./FormContext";

function SubmittedFormPage () {
   const {submittedForms} = useFormContext()


return(
    <div className='form-group1'>
        <h2>Submitted Data</h2>
        {submittedForms.map ((form, index) => (
            <div key={index}> 
                <p>Name: {form.name}</p>
                <p>Email: {form.email}</p>
                <p>Message: {form.message}</p>
            </div>

        ))}
    </div>
)

}

export default SubmittedFormPage;





// function SubmittedFormPage () {
//     const [formData, SetFormData] = useState(null)

//     useEffect(() => {
//         const storedFormData = localStorage.getItem('formData');
//         if (storedFormData){
//             SetFormData (JSON.parse (storedFormData))
//         }
//     }, [])


// return(
//     <div>
//         <h2>Submitted Data</h2>
//         {formData && (
//             <div> 
//                 <p>Name: {formData.name}</p>
//                 <p>Email: {formData.email}</p>
//                 <p>Message: {formData.message}</p>
//             </div>

//         )}
//     </div>
// )

// }
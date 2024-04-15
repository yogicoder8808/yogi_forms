import React, { useEffect, useState } from "react";


function SubmittedFormPage () {
    const [formDataList, setFormDataList] = useState([])

    useEffect (() => {
        fetchFormDta();
    },[]);

    const fetchFormDta = async () => {
        try{
            const response = await fetch ('http://localhost:4000/forms')
        if (!response.ok) {
            throw new Error ('Failed to fetch form data')
        }
        const data = await response.json();
        setFormDataList(data);
    } catch (error) {
        console.error('Error fetching form data:', error)
    }
}

    return(
        <div className='form-group1'>
            <h2>Submitted Form</h2>
            <ul>
                {formDataList.map ((formData, index) => (
                    <li key={index}>
                        <h3>Form {index + 1}</h3>
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Message: {formData.message}</p>
                        {formData.attachment && (
                            <div>
                                <p>Attachment:</p>
                                <a href={formData.attachment} download>Download Attachment</a>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
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




// const {submittedForms} = useFormContext()


// return(
//     <div className='form-group1'>
//         <h2>Submitted Data</h2>
//         {submittedForms.map ((form, index) => (
//             <div key={index}> 
//                 <p>Name: {form.name}</p>
//                 <p>Email: {form.email}</p>
//                 <p>Message: {form.message}</p>
//                 {form.attachment && (
//                     <div>
//                         <p>Attachment:</p>
//                         {typeof form.attachment === 'string' ? (
//                             <img src = {URL.createObjectURL (form.attachment)} alt = "Attachment" style={ { maxWidth: '100px', maxHeight: '100px'}}/> 
//                             ) : (
//                             <a href = {URL.createObjectURL (form.attachment)} download> Download Attachment</a>
//                             )}
//                     </div> 
//                 )}
                        
//             </div>
//         ))}
//     </div>
// )
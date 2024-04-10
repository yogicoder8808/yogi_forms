import express from 'express';
const bodyParser = require ('body-parser');

const app = express ()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())

app.post (`/api/submitted`, (req, res) => {
    const formData = req.body;

    if(!formData.name || !formData.email || !formData.message){
        return res.status(400).json ({error: 'data miaaing'});
    }
    console.log ('Form data received:', formData)
    res.status(200).json ({message: 'Form submitted successfully'});
})

app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}` );
})
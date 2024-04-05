const express = require ('express');
const bodyparser = require ('body-parser');

const app = express ()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())

app.post ('/api/submit-form', (req, res) => {
    const formData = req.body;
    console.log ('Form data received:', formData)
    res.status(200).json ({message: 'Form submitted successfully'});
})

app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}` );
})
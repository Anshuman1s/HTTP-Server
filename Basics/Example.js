const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send({
        name:"Anshuman",
        email:"Anshuman@gmail.com"
    })
});

// POST request handler for form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // Process the submitted data (for demonstration, just sending it back)
    res.send(`
        <html>
            <body>
                <h1>Form Submission Successful</h1>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
            </body>
        </html>
    `);
});


// Server listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

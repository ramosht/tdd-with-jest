const express = require('express');
const validatePassword = require('./validatePassword');

function startServer() {
    const app = express();
    
    app.use(express.json())
    
    app.get('/', (req, res) => {
        return res.status(200).json({message: 'API is running'})
    })

    app.post('/user', (req, res) => {
        const {user, password} = req.body;

        if(!password) {
            return res.status(409).json({message: "Password is empty"})
        }

        const passwordIsValid = validatePassword(password);

        if(passwordIsValid) {
            return res.status(200).json({message: "User is valid"})
        } else {
            return res.status(409).json({message: "Password is not valid"})
        }
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
}

startServer()
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req, res)  => {
    res.send('Hello world from server');
});

// Using Promises
// router.post('/register', (req, res) => {
   
//     const { name, email, phone, work, password, cpassword } = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({error: "Please fill out all the fields!"})
//     }
//     User.findOne({email: email})
//     .then((userExist) => {
//         if(userExist)
//             return res.status(422).json({error: "Email already exists!"});
        
//         const user = new User({
//             name, email, phone, work, password, cpassword
//         });

//         user.save()
//         .then(() => {
//             res.status(201).json({message: "User Registered Successfully"});
//         })
//         .catch(err => res.status(500).json({error: "Failed to register"}));
//     })
//     .catch(err => {console.log(err)})
// });


// Using Async Await
router.post('/register', async(req, res) => {
   
    const { name, email, phone, work, password, cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "Please fill out all the fields!"})
    }

    try {
        const userExist = await User.findOne({email: email});
        if(userExist)
            return res.status(422).json({error: "Email already exists!"});
        
        if(password != cpassword)
            return res.status(422).json({error: "Passwords do not match!"});
        const user = new User({
            name, email, phone, work, password, cpassword
        });

        // pre method will be called here

        await user.save();
        res.status(201).json({message: "User Registered Successfully"});
    } catch(err) {
        console.log(err);
    }
});

// login route
router.post('/signin', async(req, res) => {


    try {
        let token;
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({error: "Please fill all the fields"});
        }

        const userLogin = await User.findOne({email: email});

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            if(!isMatch)
                res.status(400).json({error: "Invalid details!"})
        
            res.json({message: "Login Successful"})
        } else {
            res.status(400).json({error: "Invalid details!"})
        }
    } catch(err) {
        console.log(err);
    }
})
module.exports = router;
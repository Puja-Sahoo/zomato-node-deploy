const User = require('../Models/MUser');
//const bcrypt = require('bcrypt');

 exports.signUpUser = /*async*/(req, res) => {
   // const saltPassword = await bcrypt.genSalt(10)
   // const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    const reqBody = req.body;
    const email = reqBody.email;
    const pwd = reqBody.password;
    //const pwd =securePassword
    const UN  = reqBody.userName;
    const FN = reqBody.first_name;
    const LN = reqBody.last_name;

    const userObj = new User({ email: email, password: pwd,userName:UN, first_name: FN, last_name: LN });
    userObj.save()
        .then(response => {
            res.status(200).json({ message: "User Registered Successfully", user: response })
        })
        .catch(err => { res.status(500).json({ error: err }) })
}

exports.loginUser = (req, res) => {
    const reqBody = req.body;
    const email = reqBody.email;
    const pwd = reqBody.password;
    

    User.find({ email: email, password: pwd })
        .then(response => {
    
            if (response.length != 0) {
                res.status(200).json({ message: "User LoggedIn Successfully", user: response, IsLoggedIn: true })
            } else {
                res.status(200).json({ message: "Combination of email and password is wrong", user: response, IsLoggedIn: false })
            }
        })
        .catch(err => { res.status(500).json({ error: err }) })
}
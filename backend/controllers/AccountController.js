// importing user context
const User = require("../model/Account");
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

class AccountController {
    // [GET] account
    async getUser(req, res, next) {
        let data = {};
        let user = req.user;
        console.log(typeof(user));
        console.log(user);
        try {
            //get user info
            let result = await findOne({ email: user.email });
            //only return allowed info
            data.first_name = result.first_name;
            data.last_name = result.last_name;
            data.email = result.email;
            data.type = result.type;
            data.fine = result.fine;
            data.avatar = user.avatar != null ? user.avatar : 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg'

            //return data retrieved from database
            console.log("data====",data)
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json({success: false, message: "server error"});
        }
    }
    
    // [GET] account/lecturers
    async getAllLecturer(req, res, next) {
        let data = {};
        let user = req.user;
        console.log(typeof(user));
        console.log(user);
        try {
            let result = await find({ type: "lecturer" }, 'first_name last_name email');
            return res.status(200).json(result);

        } catch (error) {
            console.log(error);
            return res.status(500).json({success: false, message: "server error"});
        }
    }


    // [POST] account/login
    async login(req, res, next) {
        // Our login logic starts here
        try {
            // Get user input
            const { email, password } = req.body;

            // Validate user input
            if (!(email && password)) {
                res.status(400).send("All input is required");
            }
            // Validate if user exist in our database
            const user = await findOne({ email });

            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign(
                    { user_id: user._id, email, user_type: user.type},
                    process.env.TOKEN_KEY,
                    {
                    expiresIn: "2h",
                    }
                );
                let data = {};
                data.first_name = user.first_name;
                data.last_name = user.last_name;
                data.email = user.email;
                data.type = user.type;
                data.fine = user.fine;
                data.token = token;
                data.avatar = user.avatar != null ? user.avatar : 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg'

                // // save user token
                // user.token = token;

                // // save the token to cookie that send back in response
                // res.cookie('token', token, { httpOnly: true });

                // user
                return res.status(200).json(data);
                // return res.status(200).json({success: true, message: "login successfully"});
            }
            return res.status(400).send("Invalid Credentials");
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
        // Our register logic ends here
    }


    // [POST] account/register
    async register(req, res, next) {
        // Our register logic starts here
        try {
            // Get user input
            const { first_name, last_name, email, password, type } = req.body;
            // Validate user input
            if (!(email && password && first_name && last_name)) {
            return res.status(400).send("All input is required");
            }

            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await findOne({ email });

            if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
            }

            //Encrypt user password
            console.log("password: " + password)
            const encryptedPassword = await bcrypt.hash(password, 10);

            // Create user in our database
            const user = await create({
                first_name,
                last_name,
                email: email.toLowerCase(), // sanitize: convert email to lowercase
                password: encryptedPassword,
                type
            });

            // Create token
            const token = jwt.sign(
            { user_id: user._id, email, user_type: user.type },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
            );
            // save user token
            user.token = token;

            //save cookie token
            res.cookie('token', token, { httpOnly: true });

            // return new user
            res.status(201).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
        // Our login logic ends here
        
    }


    // [POST] account/logout
    async logout(req, res){
        try {
            if (req.user != null){
                res.clearCookie('token');
                return res.status(200).json({success: true, message: "logout successfully"});
                
            }
        } catch (error) {
            console.log("catch")
            console.log(error);
            return res.status(500).json({success: false, message: "internal server error"})
        }
    }    

// Support functions:

    async getUserNameByEmail(email){
        try {
            let result = await findOne({ email: email });
            const name = result.first_name + " " + result.last_name;
            return name
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new AccountController();
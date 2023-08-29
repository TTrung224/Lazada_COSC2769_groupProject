const Account = require("../model/Account");
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

class AccountController {
    // [GET] account
    async getUser(req, res, next) {
        let user = req.user;
        try {
            let result = await Account.findOne({ email: user.email });
            let data = {}
            data.fullName = result.fullName;
            data.email = result.email;
            data.type = result.type;

            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }

    // [POST] account/login
    async login(req, res, next) {
        try {
            const { emailOrPhone, pwd } = req.body;

            if (!(emailOrPhone && pwd)) {
                res.status(400).send("All input is required");
            }

            let user;
            user = await Account.findOne({ email: emailOrPhone });
            if(!user){
                user = await Account.findOne({ phone: emailOrPhone });
            }

            if (user && bcrypt.compare(pwd, user.password)) {
                // Create token
                const token = jwt.sign(
                    { userId: user._id, email: user.email, userType: user.type },
                    process.env.TOKEN_KEY, 
                    {expiresIn: "2h"}
                );
                let data = {};
                data.fullName = user.first_name;
                data.email = user.email;
                data.type = user.type;
                data.token = token;

                // save the token to cookie that send back in response
                res.cookie('token', token, { httpOnly: true });

                // user
                return res.status(200).json(data);
                // return res.status(200).json({success: true, message: "login successfully"});
            }
            return res.status(400).send("Invalid Credentials");
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
    }


    // [POST] account/signup
    async register(req, res, next) {
        try {
            const { email, pwd, rePwd, fullName, userType, phone, address} = req.body;


            // validate user input
            if(!userType){
                return res.status(400).send("user type is required");
            }
            if(userType == "customer"){
                if (!(email && pwd && rePwd && fullName && phone && address)) {
                    return res.status(400).send("All input is required");
                }
            }else if(userType == "seller"){
                if (!(email && pwd && rePwd && fullName && phone)) {
                    return res.status(400).send("All input is required");
                }
            }else{
                return res.status(400).send("user type is incorrect");
            }
            if(!pwd === rePwd){
                return res.status(400).send("re-password is not matched");
            }

            // check existence of user
            const dbUser = await Account.find({ email: email, phone: phone });
            console.log(dbUser)
            if (dbUser.length != 0) {
                return res.status(409).send("Email or Phone number has been used with another account");
            }

            //hash and salted password
            const encryptedPassword = await bcrypt.hash(pwd, 10);
            bcrypt.hash()
            const user = await Account.create({
                fullName: fullName,
                phone: phone,
                email: email.toLowerCase(),
                password: encryptedPassword,
                type: userType,
                address: address? address : null
            });

            // if signup then not required login
            // // Token
            // const token = jwt.sign(
            //     { userId: user._id, email, userType: user.type },
            //     process.env.TOKEN_KEY, 
            //     {expiresIn: "2h"}
            // );
            // user.token = token;

            // //save cookie token
            // res.cookie('token', token, { httpOnly: true });

            res.status(201).send("register user success");
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }        
    }


    // [POST] account/logout
    async logout(req, res){
        try {
            if (req.user != null){
                res.clearCookie('token');
                return res.status(200).json({success: true, message: "logout successfully"});
            }
        } catch (error) {
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
const register = require("../models/register.model");
const submitModel = require("../models/submit.model");
const passwordGenerator = require("../utils/generatePassword");
const mailSend = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middlewares/authToken");


const userRegister = async (req, res) => {
    try {
        let { email, userName } = req.body;
        const checkEmail = await register.findOne({ email });
        if (checkEmail) {
            return res.status(409).json({ Message: "Email Already Exists.." })
        }
        let password = passwordGenerator(8);
        let hashPassword = await bcrypt.hash(password, 10);
        let data = {
            ...req.body,
            password: hashPassword,
            created: "success"
        }
        const createUser = await register.create(data);
        await mailSend(email, userName, password);
        res.json({
            createUser,
            message: "user created"
        });
    } catch (error) {
        res.json({
            Error: error
        })
    }
};


const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        const checkEmail = await register.findOne({email});
        if (!checkEmail) return res.status(404).json({ message: "Invalid Email.."});
        const checkPassword = await bcrypt.compare(password, checkEmail.password);
        if(!checkPassword) return res.status(404).json({ message: "Invalid Password.."});
        let token = generateToken(checkEmail.userId);         
        res.json({ checkEmail, token, message: "login successfull.."});        
    } catch (error) {   
        res.json({error})
    };
};


const submit = async (req, res) => {
    try {
        let save = await submitModel.create(req.body);
        res.json({save, message: "data saved"})
        
    } catch (error) {
        res.json({Error: error.message})
    }
};


const getSubmit = async (req, res) => {
    try {
        let findData = await submitModel.find();
        res.json({findData})
    } catch (error) {
        res.json({Error: error.message})
    }
}

module.exports = {
    userRegister,
    login,
    submit,
    getSubmit
}
import { USER } from "../models/user.js";
import { userService } from "../services/userService.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  try {
    const {email, password, phoneNumber} = req.body;
    const isExist = userService.search({email: email, password: password});
    let error = false;
    const phoneNumberRegex = /^\+380\d{9}$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (Object.values(req.body).length < 5) {
      error = true;
      res.status(400).json({status: 400, message: 'all fields are require', error})
    }
    
    if (isExist) {
      error = true;
      res.status(400).json({status: 400, message: 'this email have already used', error})
    };

    if (!gmailRegex.test(email)) {
      error = true;
      res.status(400).json({status: 400, message: 'email isn\'t valid, should be like test@gmail.com', error})
    }
   
    if (!phoneNumberRegex.test(phoneNumber)) {
      error = true;
      res.status(400).json({status: 400, message: 'number isn\'t valid, should be like +380*********', error})
    }

    if (password.length < 3) {
      error = true;
      res.status(400).json({status: 400, message: 'password haven\'t be less than 3 characters', error})
    }

    if (!error) {
      next()
    }
  } catch (error) {
    throw error
  }
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  next();
};

export { createUserValid, updateUserValid };

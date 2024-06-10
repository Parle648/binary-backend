import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.post('/', createUserValid, (req, res, next) => {
  try {
    const user = userService.create(req.body);

    if (user) {
      console.log('user created');
      res.data = {
        status: 200,
        data: true
      }
    }
  } catch (error) {
    res.data = {
      status: 400,
      message: 'user isn\'t created',
      error: true,
    }
  }
  finally {
    next()
  }
}, responseMiddleware)

export { router };

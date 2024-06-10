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

router.get('/', (req, res, next) => {
  try {
    const users = userService.getAll();
    if (users) {
      res.data = {
        status: 200,
        data: users
      }
    }
  } catch (error) {
    res.data = {
      status: 500,
      message: 'Cannot get users',
      error: true
    }
  }
  finally {
    next()
  }

}, responseMiddleware)

router.get('/:id', (req, res, next) => {
  try {
    const user = userService.getSpecific(req.params.id);

    if (user) {
      res.data = {
        status: 200,
        data: user
      }
    } else {
      res.data = {
        status: 404,
        message: 'user does not exist',
        error: true
      }
    }
  } catch (error) {
    res.data = {
      status: 500,
      message: 'Cannot get user',
      error: true
    }
  }
  finally {
    next()
  }

}, responseMiddleware)

router.patch('/:id', (req, res, next) => {
  try {
    const user = userService.getSpecific(req.params.id);
    const changedUser = user ? userService.update(req.params.id, req.body) : null;

    if (changedUser) {
      res.data = {
        status: 200,
        data: changedUser,
      }
    } else {
      res.data = {
        status: 400,
        message: `user with id: ${req.params.id} does not exist`,
        error: true
      }
    }
  } catch (error) {
    res.data = {
      status: 500,
      message: `server error`,
      error: true
    }
  } finally {
    next();
  };
}, responseMiddleware)

export { router };

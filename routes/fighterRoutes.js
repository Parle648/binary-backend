import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.post('/', createFighterValid, (req, res, next) => {
  try {
    const fighter = fighterService.create(req.body);
  
    if (fighter) {
      res.data = {
        status: 200,
        data: true
      }
    } else {
      res.data = {
        status: 500,
        message: 'server error',
        error: true
      }
    }
  } catch (error) {
    res.data = {
      status: 500,
      message: 'server error',
      error: true
    }
  } finally {
    next()
  }
}, responseMiddleware)

router.get('/', (req, res, next) => {
  try {
    const fighters = fighterService.getAll();

    console.log(fighters);
  
    if (fighters) {
      res.data = {
        status: 200,
        data: fighters
      }
    }
    // } else {
    //   res.data = {
    //     status: 500,
    //     message: 'internal server error try again later',
    //     error: true
    //   }
    // }
  } catch (error) {
    res.data = {
      status: 500,
      message: 'internal server error try again later',
      error: true
    }
  } finally {
    next()
  }
}, responseMiddleware)

export { router };

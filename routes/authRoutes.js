import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    try {
      // TODO: Implement login action (get the user if it exist with entered credentials)
      const isExist = authService.login(req.body);
      if (isExist !== undefined) {
        res.data = {
          status: 200,
          data: true
        };
      } else {
        res.data = {
          status: 404,
          message: 'User not found'
        }
      }
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

export { router };

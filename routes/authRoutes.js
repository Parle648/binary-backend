import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/login",
  async (req, res, next) => {
    try {
      const data = await authService.login(req.body);

      if (data) {
        res.data = {
          status: 200,
          data: true
        };
      } 
    } catch (err) {
      res.data = {
        status: 500,
        message: "User not found",
        error: err.message
      };
    } finally {
      next();
    }
  },
  responseMiddleware
);

export { router };

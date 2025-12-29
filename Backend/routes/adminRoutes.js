import express from "express";
import {
  getAllUsers,
  activateUser,
  deactivateUser,
} from "../controllers/adminController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();


router.get("/users", protect, isAdmin, getAllUsers);


router.put("/users/:id/activate", protect, isAdmin, activateUser);


router.put("/users/:id/deactivate", protect, isAdmin, deactivateUser);

export default router;

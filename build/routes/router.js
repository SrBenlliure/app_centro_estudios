import Express from "express";
import { saveSchool } from "../controllers/school_controller.js";
const router = Express.Router();
router.post("/school", saveSchool);
export { router };

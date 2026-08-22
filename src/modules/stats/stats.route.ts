import { Router } from "express";
import { statsController } from "./stats.controller";

const router = Router();

router.get("/getBlogStats", statsController.getBlogStats)

export const statsRoutes = router;
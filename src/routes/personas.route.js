import { Router } from "express";
import { methods as personasController } from "../controllers/personas.controller";

const router=Router();

router.get("/",personasController.getPersonas);
router.get("/:id",personasController.getPersona);
router.post("/",personasController.addPersonas);
router.delete("/:id",personasController.deletePersonas);
router.put("/:id",personasController.updatePersonas);

export default router;
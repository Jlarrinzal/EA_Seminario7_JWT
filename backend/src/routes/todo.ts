import { Router } from 'express';
import { signin, signup, priv, publ, estudiante1 } from '../controllers/controlador';
import { verifyToken } from '../middleware/verifyToken';

const router = Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/private", [verifyToken], priv);
router.get("/public", [verifyToken], publ);
router.get("/estudiante", [verifyToken], estudiante1);

export default router;

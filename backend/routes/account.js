import { Router } from 'express';
import { login, register, getUser, getAllLecturer, logout, setFine, resetFine } from '../controllers/AccountController';

const router = Router();

router.post('/login', login);
router.post('/register', register);

export default router;

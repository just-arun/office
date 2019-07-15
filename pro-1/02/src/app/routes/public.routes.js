import { Router } from 'express';
import UsersConteroller from '../components/user.components';

const router = Router();

router.post("/regester",UsersConteroller.Regester);
router.post("/login",UsersConteroller.Login);

export default router;

import { Router } from 'express';
import ItemsController from '../controller/items.controller';

const router = Router();

router.get("/",ItemsController.GetAll);
router.get("/:id",ItemsController.GetOne);


export default router;

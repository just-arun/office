import { Router } from 'express';
import ItemsController from '../controller/items.controller';

const router = Router();

router.post("/",ItemsController.Create);
router.put("/:id", ItemsController.UpdateOne);
router.delete("/:id",ItemsController.Delete);

export default router;

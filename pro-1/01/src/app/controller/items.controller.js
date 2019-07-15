import ItemsService from "../services/Items.service";


class ItemsController {
    static async GetAll(req,res,next) {
        await ItemsService.GetAll(req.query.count)
        .then(items => res.json({items}))
        .catch(err => res.sendStatus(404).json({ err }))
    }
    static async GetOne(req,res,next) {
        await ItemsService.GetOne(req.params.id)
        .then(item => res.json({item}))
        .catch(err => res.sendStatus(404).json({err}))
    }
    static async Create(req,res,next) {
        await ItemsService.Create(req.body)
        .then(item => res.json({item}))
        .catch(err => res.sendStatus(404).json({ err }))
    }
    static async UpdateOne(req,res,next) {
        await ItemsService.UpdateOne(req.params.id, req.body)
        .then(item => res.json(item))
        .catch(err => res.sendStatus(404).json({ err }))
    }
    static async Delete(req,res,next) {
        await ItemsService.Delete(req.params.id)
        .then(item => res.json({item}))
        .catch(err => res.sendStatus(404).json({ err }))
    }
}

export default ItemsController;

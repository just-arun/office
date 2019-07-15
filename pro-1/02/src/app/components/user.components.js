import UsersServices from "../services/users.service";


class UsersConteroller {
    static async Regester(req, res, next) {
        await UsersServices.Regester(req.body)
        .then(user => res.json({user}))
        .catch(err => res.sendStatus(404).json({err}))
    }
    static async Login(req, res, next) {
        await UsersServices.Login(req.body)
        .then(token => res.json({ token }))
        .catch(err => res.sendStatus(404).json({ err }))
    }
}

export default UsersConteroller;

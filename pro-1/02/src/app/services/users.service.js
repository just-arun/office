import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/users.model';
import Keys from '../../boot/Keys';

class UsersServices {
    static async Regester(user) {
        try {
            const { name, uname, email, pwd, level, recent, cart, bought } = user;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(pwd, salt)
            const query = { name, uname, email, pwd: hash, level, recent, cart, bought };
            const regUser = await User.create(query);
            return regUser;
        } catch (err) {
            return err;
        }
    }
    static async Login(user) {
        try {
            const { uname, pwd } = user;
            const userCheck = await User.findOne({ uname });
            if (userCheck === null) {
                return "user not found";
            }
            const res = await bcrypt.compare(pwd, userCheck.pwd);
            if (res) {
                const newwUser = await User.findOne({ uname }).select("-pwd");
                const token = await jwt.sign({ user: newwUser }, Keys.PrivateKey(),{expiresIn: '1h'});
                console.log(token);
                return token;
            } else {
                return "User name or password dosent match";
            }
        } catch (err) {
            return err;
        }
    }
}


export default UsersServices;
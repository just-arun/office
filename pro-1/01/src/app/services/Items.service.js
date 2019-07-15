import ItemsModel from "../models/Items.models";
import {
    mongo
} from "mongoose";


class ItemsService {
    static async GetAll(count) {
        try {
            if (count === null || count === "undefined") {
                const items = await ItemsModel
                    .find({})
                    .sort({
                        $natural: -1
                    });
                return items;
            } else {
                const items = await ItemsModel
                    .find({})
                    .limit(count)
                    .sort({
                        $natural: -1
                    });
                return items;
            }
        } catch (err) {
            return err;
        }
    }
    static async GetOne(_id) {
        try {
            const item = await ItemsModel.findOne({
                _id
            });
            return item;
        } catch (err) {
            return err;
        }
    }
    static async Create(item) {
        try {
            const {
                name,
                description,
                isAvailable,
                price,
                images,
                colours,
                merchent
            } = item;
            const iteml = await ItemsModel.create({
                name,
                description,
                isAvailable,
                price,
                images,
                colours,
                merchent
            });
            return iteml;
        } catch (err) {
            return err;
        }
    }
    static async UpdateOne(_id, Item) {
        try {
            const {
                name,
                description,
                isAvailable,
                price,
                colours,
                merchent
            } = Item;
            // let query = {
            //     $set: {
            //         name,
            //         description,
            //         isAvailable,
            //         price,
            //         colours,
            //         merchent
            //     }
            // };
            const Upitem = await ItemsModel.findOneAndUpdate({
                _id
            }, {$set: {
                    name,
                    description,
                    isAvailable,
                    price,
                    colours,
                    merchent
                }});
            return Upitem;
        } catch (err) {
            return err;
        }
    }
    static async Delete(_id) {
        try {
            const item = await ItemsModel.findOneAndDelete({
                _id
            });
            return item;
        } catch (err) {
            return err;
        }
    }
}


export default ItemsService;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Schema, model, connect } from "mongoose";
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
    organisation: { type: Schema.Types.ObjectId, ref: "Organisation" }
});
const OrganisationSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    city: String
});
const User = model("User", UserSchema);
const Organisation = model("Organisation", OrganisationSchema);
get().catch(err => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect('mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/');
        const organisation = new Organisation({
            name: "Meta",
            email: "meta@gmail.com",
            city: "Maski"
        });
        const user = new User({
            name: "Bon John",
            email: "bobjohn@gmail.com",
            avatar: "http://bobimage.jpg",
            organisation: organisation
        });
        yield user.save();
        yield organisation.save();
        console.log(user.name + " : " + organisation.name);
    });
}
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect('mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/');
        const users = yield User.find();
        const organisationId = users[0].organisation;
        const organisation = yield Organisation.findById(organisationId);
        console.log(organisation);
    });
}

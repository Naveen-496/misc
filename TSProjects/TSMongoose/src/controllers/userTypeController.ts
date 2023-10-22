
import mongoose, { Model, Schema, model, connect, Types } from "mongoose";

// create an interface representing the document 
interface IUser {
  name: string;
  email: string;
  avatar?: string;
  organisation: Types.ObjectId;
}

const UserSchema = new Schema<IUser>({
  name: {type: String, required: true},
  email: {type: String, required: true},
  avatar: String,
  organisation:{ type:  Schema.Types.ObjectId, ref: "Organisation"}
});

interface IOrganisation {
  name: string;
  email: string;
  city?: string;
}

const OrganisationSchema = new Schema<IOrganisation>({
   name: { type: String, required: true},
   email: { type: String, required: true},
   city: String
})

const User = model<IUser>("User", UserSchema);
const Organisation = model<IOrganisation>("Organisation", OrganisationSchema);

get().catch( err => console.log( err ));


async function run() {
   
   await connect('mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/');

   const organisation = new Organisation({
    name: "Meta",
    email: "meta@gmail.com",
    city: "Maski"
   })
   
   const user = new User({
     name: "Bon John",
     email: "bobjohn@gmail.com",
     avatar: "http://bobimage.jpg",
     organisation: organisation
   });
   
   await user.save();
   await organisation.save();
   

   console.log( user.name + " : " +  organisation.name );
}

async function get() {
   
  await connect('mongodb+srv://Naveen:Naveen496@cluster0.pqmllpx.mongodb.net/');

  const users = await User.find();
   const organisationId = users[0].organisation;
   const organisation = await Organisation.findById( organisationId );
   console.log( organisation );


}
import { Schema , model, models} from "mongoose"

const BaseSchema = new Schema({
       email: String,
       password: String,
       social: {
       facebook: String,
       twitter: String,
      },
      phonenumbers: [String],
      skills : [ {
         name:  String,
         level: String
      }],
      age: Number,
      db: Date,
      hasSocial: Boolean,
      socialMediaUrl: String,
    });
    
    export const Base = model("Base", BaseSchema)|| models.Base;
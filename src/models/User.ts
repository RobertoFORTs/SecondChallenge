import {Schema, model} from "mongoose";

interface Iuser{
    firstName: string, 
    lastName: string, 
    birthDate: Date, 
    city: string, 
    country: string, 
    email: string, 
    password: string, 
    confirmPassword: string 
}

const userSchema = new Schema<Iuser>({
    firstName: {
        type: String,
        required: [true, "A user needs a first name."]
    }, 
    lastName: {
        type: String,
        required: [true, "A user needs a last name."]
    },
    birthDate: {
        type: Date,
        required: [true, "A user needs a birth Date."]
    }, 
    city: {
        type: String,
        required: [true, "Invalid city name."]
    },

    country: {
        type: String,
        required: [true, "Invalid country name."]
    }, 
    email: {
        type: String,
        required: [true, "Field email is required."]
    }, 
    password: {
        type: String,
        required: [true, "A user has to have a password."]
    },
    confirmPassword: {
        type: String,
        required: [true, "Invalid confirmPassword entry"]
    }
})

const User = model<Iuser>("User", userSchema);

export {User};



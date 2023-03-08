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
};

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
        required: [true, "Field email is required."],
        lowercase: true,
        unique: true
    }, 
    password: {
        type: String,
        required: [true, "Please provide a password."],
        select: false //it wont show the password on the database (still needs encryption though)
        //add a minLength later
        
    },
    confirmPassword: {
        type: String,
        required: [true, "Confirming password is required"],
        validate: {
            validator: function(this: Iuser, element: String): Boolean {
                const password: String = this.password;
                return element === password;
            },
            message: "Passwords dont match!"
        }
    }
})

const User = model<Iuser>("User", userSchema);

export {User};



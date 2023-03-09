import { Schema, model } from "mongoose";
import {bcrypt} from "bcrypt";
import { NextFunction } from "express";

interface IUser {
	firstName: string,
	lastName: string,
	birthDate: Date,
	city: string,
	country: string,
	email: string,
	password: string,
	confirmPassword: string
};

const userSchema = new Schema<IUser>({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	birthDate: {
		type: Date,
	},
	city: {
		type: String,
	},
	country: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	}
	//actvie
	//resettoken
	//resettokenexpires
	//resetpassowrdat
});

//encrypt password before saving
userSchema.pre('save', async function (this: any, next: NextFunction) {

	if (this.isModified('password')){
		this.password = await bcrypt.hash(this.password, 12);
		next();
	}
	return next();
})

//add some methods to the model such as for reseting password if needed

const User = model<IUser>("User", userSchema);

export { User };
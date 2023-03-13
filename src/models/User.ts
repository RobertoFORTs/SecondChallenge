import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

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
		select: false
	}
});

userSchema.pre("save", async function (next):Promise<void> {
	if (this.isModified("password")){
		this.password = await bcrypt.hash(this.password, 12);
		next();
	}
	return next();
})

const User = model<IUser>("User", userSchema);

export { User };
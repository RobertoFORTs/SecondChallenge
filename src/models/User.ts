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
	//active
	//resettoken
	//resettokenexpires
	//resetpassowrdat
});

//encrypt password before saving
userSchema.pre("save", async function (next):Promise<void> {

	if (this.isModified('password')){
		this.password = await bcrypt.hash(this.password, 12);
		next();
	}
	return next();
})

//add some methods to the model such as for reseting password if needed

// userSchema.methods.checkPassword = async function(password : string | Buffer, encryptedPassword : string) {
// 	return await bcrypt.compare(password, encryptedPassword);
// }

const User = model<IUser>("User", userSchema);

export { User };
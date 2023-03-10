import { HydratedDocument } from "mongoose";
import { createJwtToken } from "../controllers/authController";
import { User } from "../models/User";

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

interface IuserRepository{
	signUserUp(user: Iuser, status: number, res: any): Promise<void>,
	signUserIn(email: string, password: string): Promise<HydratedDocument<Iuser>>,
};

export class UserRepository implements IuserRepository{
	async signUserUp(user: Iuser, status: number, res: any): Promise<void> {
		const newUser = await User.create({
			firstName: user.firstName,
			lastName: user.lastName,
			birthDate: user.birthDate,
			city: user.city,
			country: user.country,
			email: user.email,
			password: user.password
		});
		createJwtToken(newUser, 201, res); //it also will send the data
	};

	signUserIn(email: string, password: string): Promise<HydratedDocument<Iuser>>{
		throw new Error ('Method not implemented yet');
	}
};
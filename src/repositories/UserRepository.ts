import { HydratedDocument } from "mongoose";
import { createJwtToken } from "../controllers/authController";
import { AppError } from "../errors/AppError";
import { User } from "../models/User";
import bcrypt from "bcrypt";

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
	signUserIn(email: string, password: string, res: any, next: any): Promise<void>,
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
		createJwtToken(newUser, 201, "Succesfull user registration", res); //it also will send the data
	};

	async signUserIn(email: string, password: string, res: any, next: any): Promise<void>{	
		//find existing user
		const user: HydratedDocument<Iuser> | null = await User.findOne({ email }).select("+password");
		
		//user found? is password correct?
		if (!user || !(await bcrypt.compare(password, user.password))){
			return next(new AppError("incorrect email or password", 401));
		}

		createJwtToken(user, 200, "User has logged in" ,res);
	}
};
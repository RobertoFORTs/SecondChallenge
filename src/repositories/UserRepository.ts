import { HydratedDocument } from "mongoose";
import { createJwtToken } from "../controllers/authController";
import { AppError } from "../errors/AppError";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { NextFunction } from "express";

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
	signUserIn(email: string, password: string, req: any, res: any, next: any): Promise<void>,
	updateMe(req: any, res: any, next: NextFunction): Promise<void>,
	deleteMe(req: any, res: any, next: NextFunction): Promise<void>,
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


	async signUserIn(email: string, password: string, req: any, res: any, next: any): Promise<void>{	
		//find existing user
		const user: HydratedDocument<Iuser> | null = await User.findOne({ email }).select("+password");
		
		//user found? is password correct?
		if (!user || !(await bcrypt.compare(password, user.password))){
			return next(new AppError("incorrect email or password", 401));
		}

		createJwtToken(user, 200, "User has logged in", res);
	}

	async updateMe(req: any, res: any, next: NextFunction): Promise<void>{
		if (!req.body){
			throw new AppError('Please provide new user data to procede.', 400);
		}
		if (req.body.email || req.body.password){
			throw new AppError('You cant change password here', 400);
		}

		//const fields = ["firstName", "lastName", "birthDate", "city", "country"];
		const newObjUser: {} = req.body;

		//if needs to change every field
		// Object.keys(newObjUser).forEach(el => {
		// 	if (fields.includes(el)) {
		// 		fields.filter(field => field !== el);
		// 	}
		// });
		// if (fields){
		// 	return next(new AppError("incomplete data, please provide complete new user data", 400));
		// }

		const updatedUser = await User.updateOne(req.user, newObjUser, {
			new: true,
			runValidators: true
		});

		res.status(200).json({
			message: "success",
			data:{ 
				updatedUser: updatedUser
			}
		});
	}

	async deleteMe(req: any, res: any, next: NextFunction): Promise<void> {
		
	}
};
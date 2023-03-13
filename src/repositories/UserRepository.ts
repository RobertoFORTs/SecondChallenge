import { HydratedDocument } from "mongoose";
import { createJwtToken } from "../controllers/authController";
import { AppError } from "../errors/AppError";
import { User } from "../models/User";
import { NextFunction } from "express";

import bcrypt from "bcrypt";

interface IUser{
	firstName: string, 
	lastName: string, 
	birthDate: Date, 
	city: string, 
	country: string, 
	email: string, 
	password: string, 
	confirmPassword: string 
};

interface IuserRepository { 
	signUserUp(user: IUser, status: number, res: any): Promise<void>,
	signUserIn(email: string, password: string, res: any, next: any): Promise<void>,
	updateMe(req: any, res: any, next: NextFunction): Promise<any>,
	deleteMe(req: any, res: any, next: NextFunction): Promise<void>,
};

class UserRepository implements IuserRepository {
	private static INSTANCE: UserRepository;

	static getInstance() {
		if (!UserRepository.INSTANCE) {
			UserRepository.INSTANCE = new UserRepository();
		}

		return UserRepository.INSTANCE;
	}

	async signUserUp(user: IUser, status: number, res: any): Promise<void> {
		const newUser = await User.create({
			firstName: user.firstName,
			lastName: user.lastName,
			birthDate: user.birthDate,
			city: user.city,
			country: user.country,
			email: user.email,
			password: user.password
		});

		createJwtToken(newUser, status, "Successfull user registration", res);
	};

	async signUserIn(email: string, password: string, res: any, next: any): Promise<void>{	
		const user: HydratedDocument<IUser> | null = await User.findOne({ email }).select("+password");
		
		if (!user || !(await bcrypt.compare(password, user.password))){
			return next(new AppError("incorrect email or password", 401));
		}

		createJwtToken(user, 200, "User has logged in", res);
	}

	async updateMe(req: any, res: any, next: NextFunction): Promise<any>{
		const newObjUser: {} = req.body;

		const updatedUser = await User.updateOne(req.user, newObjUser, {
			new: true,
			runValidators: true
		});

		return updatedUser;
	}

	async deleteMe(req: any, res: any, next: NextFunction): Promise<void> {
		await User.findByIdAndDelete(req.user._id);
	
	}
};

export { UserRepository }
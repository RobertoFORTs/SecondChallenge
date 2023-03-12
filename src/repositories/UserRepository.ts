import { HydratedDocument } from "mongoose";
import { createJwtToken } from "../controllers/authController";
import { AppError } from "../errors/AppError";
import { User } from "../models/User";
import { NextFunction } from "express";

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

interface IuserRepository { 
	signUserUp(user: Iuser, status: number, res: any): Promise<void>,
	signUserIn(email: string, password: string, res: any, next: any): Promise<void>,
	updateMe(req: any, res: any, next: NextFunction): Promise<void>,
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

		createJwtToken(newUser, status, "Successfull user registration", res);

		return;
	};

	async signUserIn(email: string, password: string, res: any, next: any): Promise<void>{	
		const user: HydratedDocument<Iuser> | null = await User.findOne({ email }).select("+password");
		
		if (!user || !(await bcrypt.compare(password, user.password))){
			return next(new AppError("incorrect email or password", 401));
		}

		createJwtToken(user, 200, "User has logged in", res);

		return;
	}

	async updateMe(req: any, res: any, next: NextFunction): Promise<void>{
		const newObjUser: {} = req.body;

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

		return;
	}

	async deleteMe(req: any, res: any, next: NextFunction): Promise<void> {
		await User.findByIdAndDelete(req.user._id);
		res.status(204).json({
			message: "success"
		});

		return;
	}
};

export { UserRepository }
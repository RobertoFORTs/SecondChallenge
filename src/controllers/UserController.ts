import { NextFunction, Request } from "express";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository";

const repository = UserRepository.getInstance();

class UserController {
  async signUserUp (req: Request, res: any): Promise<void> {       
  	await repository.signUserUp(req.body, 201, res);

		return;
  }

  async signUserIn(req: any, res: any, next: any): Promise<void> {
   if (!req.body.email || !req.body.password){
  	return next(new AppError("Please provide email and password", 400));
   }
        
   await repository.signUserIn(req.body.email, req.body.password, res, next);

	 return;
  }

  async uptadeMe (req: any, res: any, next: NextFunction): Promise<void>{
  	const newUserBody = await repository.updateMe(req, res, next);
    res.status(200).json({
      status: "success",
      message: "User updated",
      data: {
        newUserBody
      }
    });
  }

  async deleteMe (req: any, res: any, next: NextFunction): Promise<void>{
  	await repository.deleteMe(req, res, next);
    res.status(204).json({
			message: "success"
		});
  }
}

export { UserController }
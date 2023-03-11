import {NextFunction, Request, Response} from "express";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository"; //contains the actual methods
//this is still only a base controller, it has to be added more complex funccionality
const repository = new UserRepository();

export class UserController {
    async signUserUp (req : Request, res: any): Promise<void> { //res in type any coz type Response doenst have res.cookie
        
        await repository.signUserUp(req.body, 201, res);  //data is beeing sent in authController(createJwtToken)
    };

    async signUserIn(req : any, res: any, next: any): Promise<void> {
        if (!req.body.email || !req.body.password){
            return next(new AppError("Please provide email and password", 400));
        }
        
        await repository.signUserIn(req.body.email, req.body.password, req, res, next);
    }

    async uptadeMe (req: any, res: any, next: NextFunction): Promise<void>{
        await repository.updateMe(req, res, next);
    }
}

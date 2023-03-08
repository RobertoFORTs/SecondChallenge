import {Request, Response} from "express";
import { UserRepository } from "../repositories/UserRepository"; //contains the actual methods
//this is still only a base controller, it has to be added more complex funccionality
const repository = new UserRepository();

export class UserController {
    async signUserUp (req : Request, res: Response): Promise<Response> {
        const createdUser = await repository.signUserUp(req.body);

        return res.status(201).json({
            data: createdUser,
            message: "User successfully registered"
        });

    };

    async signUserIn(req : Request, res: Response): Promise<Response> {
        if (!req.body.email || !req.body.password){
            return res.status(400).json({
                message: "invalid email or password"
            });
        }
        const verifiedUser = await repository.signUserIn(req.body.email, req.body.password);

        return res.status(200).json({
            message: "user has logged in"
        });
    }
}

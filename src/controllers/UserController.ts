import {Request, Response} from "express";
import { UserRepository } from "../repositories/UserRepository"; //contains the actual methods
//this is still only a base controller, it has to be added more complex funccionality
const repository = new UserRepository();

export class UserController {
    async signUserUp (req : Request, res: any): Promise<void> { //res in type any coz type Response doenst have res.cookie
        await repository.signUserUp(req.body, 201, res);  //data is beeing sent in authController(createJwtToken)
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

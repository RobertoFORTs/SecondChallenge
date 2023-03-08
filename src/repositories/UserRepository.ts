import { HydratedDocument } from "mongoose";

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
    signUserUp(user : Iuser): Promise<HydratedDocument<Iuser>>,
    signUserIn(email : string, password: string): Promise<HydratedDocument<Iuser>>,
};

export class UserRepository implements IuserRepository{

    signUserUp(user : Iuser): Promise<HydratedDocument<Iuser>> {
        throw new Error ('Method not implemented yet');
    };

    signUserIn(email : string, password: string): Promise<HydratedDocument<Iuser>>{
        throw new Error ('Method not implemented yet');
    }
};
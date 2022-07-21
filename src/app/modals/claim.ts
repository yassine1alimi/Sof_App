import { User } from './user';

export class Claim {
    idClaim:number;
	typeClaim:String;
	createdAt:Date;
    description:String;
    statusOfClaim: boolean;
    fileClaim:String;
    priorite:String;
    groupe_name:String;
    idUser:number;
	  user: User;
}
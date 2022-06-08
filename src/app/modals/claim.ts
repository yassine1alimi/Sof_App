import { User } from './user';

export class Claim {
    idClaim:number;
	typeClaim:String;
	createdAt:Date;
    description:String;
    statusOfClaim: boolean;
    fileClaim:String;
    idUser:number;
	  user: User;
}
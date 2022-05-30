
import { User } from './user';

export class Demande {
	idDemande:number;
	typeDemande:String;
	debutDemande:Date;
	finDemande:Date;
	createdAt:Date;
    description:String;
	 // duree: String; 
	  //soldeConge: number;
	  statusOfDemand: boolean;
	  idUser:number;
	  user: User;
}
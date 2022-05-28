
import { User } from './user';

export class Conge {
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
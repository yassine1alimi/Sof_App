
import { User } from './user';

export class Demande {
	idDemande:number;
	typeDemande:String;
	categorie:String;
	urgence:String;
	createdAt:Date;
    description:String;
	 // duree: String; 
	  //soldeConge: number;
	  statusOfDemand: boolean;
	  idUser:number;
	  user: User;
}
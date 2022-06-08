import { User } from './user';
export class ReclamationClient {
    idReclamation:number;
	  prenom:String;
	  typeClaim:String;
	  description:String;
	  nom:String;
      dateReclamation:Date;
	  phone:String;
	  email:String;
	  cin:String;
	  adresse:String;
	  ville:String;
	  photo :String;
      password:String;
      pj1 :string;
	  pj2 :String;
	 
	  archived :Boolean; 
	  idUser:number;
	  user: User;
}
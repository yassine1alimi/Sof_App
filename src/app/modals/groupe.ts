import { User } from './user';
import { Departement } from './departement';
export class Groupe{
    idGroupe:number;
    name:String;
    idUser:number;
    user: User;
    idDepartement:number;
    departement:Departement;
}
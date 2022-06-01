import { Employe } from "./employe";
import { ReclamationClient } from "./reclamationClient";
export class Timesheet{
    idUser:number;
    employe:Employe;
    idReclamation:number;
    reclamationClient:ReclamationClient;
    dateDebut:Date;
    dateFin:Date;
}
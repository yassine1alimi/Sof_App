export class Message {
    public user_name_sender: string ;
    public user_name_reciver: string ;
    public  message: string ;
    public date_message : string ; 
    constructor(user_name_sender: string , user_name_reciver: string , message: string , date_message : string){
          this.user_name_sender=user_name_sender;
          this.user_name_reciver=user_name_reciver;
          this.message=message;
          this.date_message=date_message;
    }
  
}

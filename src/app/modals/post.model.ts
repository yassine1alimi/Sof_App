import { User } from './user';
export class Post {
    postId:number;
    postLocked:boolean;
    postCategory:string;
    postContent:Blob;
    postContentType:string
    postDescription:string
    PostCreationDate:Date
    idUser:number;
	user: User;
}
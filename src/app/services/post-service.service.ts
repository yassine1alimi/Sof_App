import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EvaluationPost } from '../modals/evaluationPost.model';
import { Post } from '../modals/post.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  BASE_URL  = "http://localhost:8087";

  static_Example= {
    postDescription:"Angular Post",
    postTitle:"Test Angular Title"
  }

  constructor(public http:HttpClient) {
    this.http = http 
  }

  addPost(file: string | Blob,userId: string | number,post: any):Observable<Post>{
    const content :FormData = new FormData();
    content.append('details',JSON.stringify(post));
    content.append('file',file);
    console.log(content);
    console.log(this.BASE_URL+"addPostFile/"+userId)
    return this.http.post<Post>(this.BASE_URL+"/addPostFile/"+userId,content);
  }

  addVideo(file: string | Blob,userId: string | number,post: any){
    const content :FormData = new FormData();
    content.append('details',JSON.stringify(post));
    content.append('file',file);
    console.log(content);
    //console.log(this.BASE_URL+"addVideoFile/"+userId)
    return this.http.post<Post>(this.BASE_URL+"/addVideoFile/"+userId,content);
  }



  deletePost(postId:number){
    console.log()
    return this.http.delete(this.BASE_URL+"/deletePost/"+postId)
  }


  updatePost(postId: number,file: string | Blob){
    const content :FormData = new FormData();
    content.append('file',file);
    console.log(content)
    return this.http.put<Post>(this.BASE_URL+"/updatePostFile/"+"19",content);
  }


  /*getPost(){
    let link = "http://localhost:8087/getPost/7"
    return this.http.get<Post>("http://localhost:8087/getPost/19");

  }*/

  getPostsByUserPreferences(userId: number):Observable<Post[]>{
   /*
    let end_point = this.BASE_URL+"getPostsByUserPreferences/"+userId;
    return this.http.get<Post[]>(end_point);
    */
    return this.http.get<Post[]>(this.BASE_URL + '/getPostsByUserPreferences'+'/' + 4,httpOptions);
  }

  getPostEvaluation(postId: string | number):Observable<EvaluationPost>{
    return this.http.get<EvaluationPost>(this.BASE_URL+"/evaluatePostRatingByPostId/"+postId);
  }
  getUserPost(postId: string | number):Observable<evaluationDetails[]>{
    return this.http.get<evaluationDetails[]>(this.BASE_URL+"/getAllEvaluationPostByPostId/"+postId);
  }

  getUserName(userId: string){
    return this.http.get<evaluationDetails[]>(this.BASE_URL+"/getUser/"+userId);
  }

  addcomment(commentContent: string,postId: string,userId: string | number){
    let comment = {}
    comment['commentContent'] = commentContent;
    console.log(comment);
    //http://localhost:8087/addEvaluatePostText/22/3
    //console.log(comment);
    return this.http.post(this.BASE_URL+"/addEvaluatePostText/"+postId+"/"+userId,{"commentContent":commentContent});

  }

  addEvaluationRating(postId: string,userId: string,rating: any){
    console.log(this.BASE_URL+"/evaluatePostRating"+"/"+postId+"/"+userId);
    let ratingEvaluation = {};
    ratingEvaluation["rating"] = rating;
    return this.http.post(this.BASE_URL+"/evaluatePostRating"+"/"+postId+"/"+userId,ratingEvaluation);
  }
  addEvaluationEmoji(postId: string,userId: string | number,emoji: string){
    let emojiEvaluation = {};
    emojiEvaluation["emoji"]=emoji;
    console.log(emojiEvaluation)
    return this.http.post(this.BASE_URL+"/evaluatePostEmoji"+"/"+postId+"/"+userId,emojiEvaluation);

  }
  
}
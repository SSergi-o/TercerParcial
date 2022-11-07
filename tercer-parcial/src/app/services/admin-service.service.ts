import { Injectable } from '@angular/core';
import {Auth, signInWithCredential} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private auth:Auth) {

  }
  login({userName, password}:any){
    return signInWithCredential(userName,password);
  }
}

import { Injectable, ComponentFactoryResolver } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }


  login(email : string, password : string){

    return new Promise((resolve, rejected) => {
  
    this.AFauth.signInWithEmailAndPassword(email, password)
    
    .then (user => resolve(user.user.getIdToken()
    .then (d => {localStorage.setItem('token', d)})
    
  
    ))
    
    .catch(err => rejected(err))
  
    });

}


/*


 public login(email : string, password : string)
  {
    this.AFauth.signInWithEmailAndPassword(email, password)
    .then((data) => {
      data.user.getIdToken()
      .then(d => {
        localStorage.setItem('token', d);
      });
      window.location.reload();
    })
    .catch(e => {

    });
  }

  */



register(email : string, password : string){

  return new Promise((resolve, rejected) => {

  this.AFauth.createUserWithEmailAndPassword(email, password)
  
  .then (user => resolve(user))
  
  .catch(err => rejected(err))

  });

}

}
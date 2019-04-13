import * as firebase from 'firebase/app';
import 'firebase/auth';

export class AuthService {
    createUser(email: string, password: string) {
        console.log('create user');
        return firebase.auth().createUserWithEmailAndPassword(email, password);
      }
    
      loginUser(email: string, password: string) {
        console.log('login user');
        return firebase.auth().signInWithEmailAndPassword(email, password);
      }
}
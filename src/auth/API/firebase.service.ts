import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { from, Observable } from 'rxjs';

const firebaseConfig = {
  apiKey: "AIzaSyC1QZtERlz_PCEqfXZegfa0YbKwpEtUWyA",
  authDomain: "hypetix-1d44c.firebaseapp.com",
  projectId: "hypetix-1d44c",
  storageBucket: "hypetix-1d44c.firebasestorage.app",
  messagingSenderId: "806108605257",
  appId: "1:806108605257:web:3a25ceaeb19c789bab8898",
  measurementId: "G-Q3R7W3ZD6D"
};

const app = initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  private auth = getAuth(this.app);
  private firestore = getFirestore(this.app);

  constructor(
    private http: HttpClient
  ) {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    console.log('Firebase Initialized');
  }

  getAuth(): Auth {
    return this.auth;
  }

  getFirestore(): Firestore {
    return this.firestore;
  }
 // Method to log in with Google and get both userId and accessToken
 loginWithGoogle(): Observable<any> {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/gmail.readonly');
  provider.addScope('https://www.googleapis.com/auth/gmail.modify');
  return from(
    signInWithPopup(this.auth, provider).then((result: UserCredential) => {
      const user = result.user;

      console.log(user);

      // Get the Google OAuth credential
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      // Get the access token from the credential
      const accessToken = credential?.accessToken as string;

      // Return both userId and accessToken in an object
      return user;
    })
  );
}

  
  getGoogleInformation = (ID: string, token: string): Observable<any> => {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`https://gmail.googleapis.com/gmail/v1/users/me/profile`,{headers})
  }

}

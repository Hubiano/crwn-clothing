import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
   apiKey: "AIzaSyCS50CLurGsB5MULyL-G1hMcH_cy87Lvu8",
   authDomain: "crown-db-671ba.firebaseapp.com",
   databaseURL: "https://crown-db-671ba.firebaseio.com",
   projectId: "crown-db-671ba",
   storageBucket: "crown-db-671ba.appspot.com",
   messagingSenderId: "740423265646",
   appId: "1:740423265646:web:249aa7cae7d08cf107a57f",
   measurementId: "G-226XYMQPP9"
};
 
firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

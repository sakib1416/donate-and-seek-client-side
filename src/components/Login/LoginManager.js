import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else{
    firebase.app();
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        storeAuthToken();
        return signedInUser;
    // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
  });

}

const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token', idToken)
      }).catch(function(error) {
        // Handle error
      });
}
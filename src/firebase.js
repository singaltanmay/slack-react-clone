import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBGEhFCU_bBBCxfA3E4gpodxajkaCOP4E",
    authDomain: "slack-react-clone-cb4ca.firebaseapp.com",
    databaseURL: "https://slack-react-clone-cb4ca.firebaseio.com",
    projectId: "slack-react-clone-cb4ca",
    storageBucket: "slack-react-clone-cb4ca.appspot.com",
    messagingSenderId: "613616597804",
    appId: "1:613616597804:web:4b51d0e93e90cd84d54a89",
    measurementId: "G-DC27EZVKFP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
}

export const signOut = () => {
    auth.signOut();
};

export const createOrGetUserProfileDocument = async (user) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email, photoUrl } = user;

        try {
            const user = {
                display_name: displayName,
                email,
                photo_url: photoUrl ? photoUrl : 'https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72',
                created_at: new Date()
            };
            await userRef.set(user);
        } catch (error) {
            console.log('Error', error);
        }
    }

    return getUserDocument(user.uid);

}

export const getUserDocument = async (uid) => {

    if (!uid) return null;

    try {
        const userDocument = await firestore.collection('user').doc(uid);
        return userDocument;
    } catch (error) {
        console.error('Error in getUserDocument', error.message);
    }


}
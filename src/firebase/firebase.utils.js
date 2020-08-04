import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPx8UNV4X_FKHsQezHswewaswXlxOEVSY",
    authDomain: "cea-reactapp.firebaseapp.com",
    databaseURL: "https://cea-reactapp.firebaseio.com",
    projectId: "cea-reactapp",
    storageBucket: "cea-reactapp.appspot.com",
    messagingSenderId: "87495308864",
    appId: "1:87495308864:web:0fde4cbbd1db01283391a5",
    measurementId: "G-J847YCYV9G"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = collections => {
    const { people } = collections.docs[0].data();
    return people;
  };
  
  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
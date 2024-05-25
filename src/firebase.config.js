import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBvZI_eqOFPdpXLP8Nt7NrxTlh9_b7ig-w",
    authDomain: "loginform-406208.firebaseapp.com",
    databaseURL: "https://loginform-406208-default-rtdb.firebaseio.com",
    projectId: "loginform-406208",
    storageBucket: "loginform-406208.appspot.com",
    messagingSenderId: "876785579290",
    appId: "1:876785579290:web:0123e03aac5e4565eee8a3",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)


export {app, firestore, storage};

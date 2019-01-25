import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyD8IG8GmgNtdH_cJTjM7a652dIb4Jv1xC4",
    authDomain: "com-alvarokoke-e9067.firebaseapp.com",
    databaseURL: "https://com-alvarokoke-e9067.firebaseio.com",
    projectId: "com-alvarokoke-e9067",
    storageBucket: "com-alvarokoke-e9067.appspot.com",
    messagingSenderId: "402881414981"
};
firebase.initializeApp(config);

export default firebase;
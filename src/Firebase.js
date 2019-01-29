import * as firebase from 'firebase';
import { DB_KEYS } from './keys';

let config = {
    apiKey: DB_KEYS.API_KEY,
    authDomain: DB_KEYS.AUTH_DOMAIN,
    databaseURL: DB_KEYS.DATABASE_URL,
    projectId: DB_KEYS.PROJECT_ID,
    storageBucket: DB_KEYS.STORAGE_BUCKET,
    messagingSenderId: DB_KEYS.MESSAGING_SENDERID,
};
firebase.initializeApp(config);

export default firebase;
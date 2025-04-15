import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBJnEdyfiRUpY0chVDvsBYjDRwnLhKL_YY",
    authDomain: "teardrops-4199b.firebaseapp.com",
    projectId: "teardrops-4199b",
    storageBucket: "teardrops-4199b.firebasestorage.app",
    messagingSenderId: "170510630658",
    appId: "1:170510630658:web:26cadf3267f03d1e0ccc1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, onValue, ref, set };

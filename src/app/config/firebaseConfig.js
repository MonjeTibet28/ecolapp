// src/config/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

import { getDatabase } from 'firebase/database'; // Importar la base de datos
const firebaseConfig = {
    apiKey: "AIzaSyBTvxKSsGyW5kK_EwkwokD3KEt6IxJfW1I",
    authDomain: "ecolapp-27d7a.firebaseapp.com",
    databaseURL: "https://ecolapp-27d7a-default-rtdb.firebaseio.com",
    projectId: "ecolapp-27d7a",
    storageBucket: "ecolapp-27d7a.appspot.com",
    messagingSenderId: "307377286799",
    appId: "1:307377286799:web:9d3bd2832ac70f127a8afa",
    measurementId: "G-0L996028F0"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = process.browser ? getAnalytics(app) : null;

const database = getDatabase(app); // Inicializar la base de datos
export { auth, analytics, database };

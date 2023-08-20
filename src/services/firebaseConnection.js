//import AsyncStorage from '@react-native-community/async-storage';
import { initializeApp } from 'firebase/app';
//import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';

export const firebaseConfig = initializeApp({    
    apiKey: "AIzaSyDixYA-CZwqHKhNbKgJhg-8QB3bgJ3rx78",
    authDomain: "treinafaces.firebaseapp.com",
    projectId: "treinafaces",
    storageBucket: "treinafaces.appspot.com",
    messagingSenderId: "1086549474549",
    appId: "1:1086549474549:web:48d60ab68fe979b72099bc"
});

//initialize Firebase 

/* export const auth = initializeAuth( firebaseConfig, {
    persistence: getReactNativePersistence(AsyncStorage),
}); */

export default firebaseConfig;

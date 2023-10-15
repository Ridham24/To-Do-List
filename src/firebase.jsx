import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBVUdhF8nPTf9AUCxOZzeVWZZtJfnoFa1w',
  authDomain: 'to-do-list-d07f6.firebaseapp.com',
  projectId: 'to-do-list-d07f6',
  storageBucket: 'to-do-list-d07f6.appspot.com',
  messagingSenderId: '575885570474',
  appId: '1:575885570474:web:bdec554599dbbd0d293bd3',
  measurementId: 'G-0BNVCP50C2',
})
const db = firebaseApp.firestore()
export default db

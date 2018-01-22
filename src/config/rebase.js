import Rebase from 're-base'
import firebase from 'firebase'

const data = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT}.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_MESSEGE_ID,
}

const app = firebase.initializeApp(data)

const db = firebase.database(app)
const base = Rebase.createClass(db)

export default base

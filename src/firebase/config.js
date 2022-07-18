import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDW4Flkr7qNaktQYBrwx140R1mvqhzTUOg",
  authDomain: "lacisuradesilvio-ef83c.firebaseapp.com",
  projectId: "lacisuradesilvio-ef83c",
  storageBucket: "lacisuradesilvio-ef83c.appspot.com",
  messagingSenderId: "692433302622",
  appId: "1:692433302622:web:5780f2ec23bdc99396b0cf"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}
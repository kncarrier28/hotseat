import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA9WukCMBBRzG0hyXchMScZBbSJtW99VIU",
  authDomain: "hotseat-2160b.firebaseapp.com",
  databaseURL: "https://hotseat-2160b.firebaseio.com",
  projectId: "hotseat-2160b",
  storageBucket: "hotseat-2160b.appspot.com",
  messagingSenderId: "884464014938",
  appId: "1:884464014938:web:0ec1bb4e33dcdd8339aa63",
  measurementId: "G-PNKS22DJ9N"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.fieldValue = app.firestore.FieldValue;

    this.auth = app.auth();
    this.db = app.firestore();
  }
}

export default Firebase;

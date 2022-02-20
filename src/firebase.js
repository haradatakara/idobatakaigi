import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCl467K1geIV1sWkcMzgFIbCvHi4w2e7-w",
  authDomain: "idobatakaigi-with-takara.firebaseapp.com",
  projectId: "idobatakaigi-with-takara",
  storageBucket: "idobatakaigi-with-takara.appspot.com",
  messagingSenderId: "435900357040",
  appId: "1:435900357040:web:6afadfad1acad9562a5e75"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('massages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({name, text})
}

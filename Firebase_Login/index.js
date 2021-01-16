var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyB4gYtoC7jV-ysiZPGI5Z-6D7QpiFzD-6Y",
  authDomain: "lovepopcorn-9e62b.firebaseapp.com",
  databaseURL: "https://lovepopcorn-9e62b.firebaseio.com",
  projectId: "lovepopcorn-9e62b",
  storageBucket: "lovepopcorn-9e62b.appspot.com",
  messagingSenderId: "761846507788",
  appId: "1:761846507788:web:05e4c31c5b962eea2b8129",
  measurementId: "G-X24T3N7RWP",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyB4gYtoC7jV-ysiZPGI5Z-6D7QpiFzD-6Y",
//   authDomain: "lovepopcorn-9e62b.firebaseapp.com",
//   databaseURL: "https://lovepopcorn-9e62b.firebaseio.com",
//   projectId: "lovepopcorn-9e62b",
//   storageBucket: "lovepopcorn-9e62b.appspot.com",
//   messagingSenderId: "761846507788",
//   appId: "1:761846507788:web:05e4c31c5b962eea2b8129",
//   measurementId: "G-X24T3N7RWP"
// };

firebase.initializeApp(config);

async function Logar() {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword("jbraz.est@gmail.com", "123456");

    const token = await firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true);

    console.log(token);
  } catch (error) {
    console.log(error);
  }
}
Logar();

// email: jbraz.est@gmail.com senha: 123456
// "test@gmail.com", "123123"

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDjwqvL54QJXUVdaXHy-rz0Bt6r9OqhXMo",
    authDomain: "netflix-clone-6ea4e.firebaseapp.com",
    projectId: "netflix-clone-6ea4e",
    storageBucket: "netflix-clone-6ea4e.appspot.com",
    messagingSenderId: "817194626122",
    appId: "1:817194626122:web:1d2b8b1901d483de730ab3",
    measurementId: "G-ZTE8LENR0L"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);


  export default storage ;









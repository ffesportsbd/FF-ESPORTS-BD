import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "তোমার apiKey",
  authDomain: "তোমার authDomain",
  projectId: "তোমার projectId",
  storageBucket: "তোমার storageBucket",
  messagingSenderId: "তোমার messagingSenderId",
  appId: "তোমার appId"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

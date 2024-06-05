// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCifP1Wh7x6HjVWv_skefJz2JXzkNm5L-o",
  authDomain: "job-portal-demo-1be82.firebaseapp.com",
  projectId: "job-portal-demo-1be82",
  storageBucket: "job-portal-demo-1be82.appspot.com",
  messagingSenderId: "846539116166",
  appId: "1:846539116166:web:252f7c1874cb7280ed8b07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
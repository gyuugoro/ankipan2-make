import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.fb_api_key,
  authDomain: process.env.fb_auth_domain,
  projectId: process.env.fb_project_id,
  storageBucket: process.env.fb_storage_bucket,
  messagingSenderId: process.env.fb_messaging_sender_id,
  appId: process.env.fb_app_id,
  measurementId: process.env.fb_measurement_id
};

const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);
const db = getFirestore(app);
const perf = getPerformance(app);

const add_book = async (data) => {
  const ref = await addDoc(collection(db, "Books"), data)
  return ref.id
}


export {
  add_book
}
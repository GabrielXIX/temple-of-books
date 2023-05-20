import { dbEnvVars } from "./Keys";

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: dbEnvVars.API_KEY,
  authDomain: dbEnvVars.AUTH_DOMAIN,
  projectId: dbEnvVars.PROJECT_ID,
  storageBucket: dbEnvVars.STORAGE_BUCKET,
  messagingSenderId: dbEnvVars.MESSAGING_SENDER_ID,
  appId: dbEnvVars.APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

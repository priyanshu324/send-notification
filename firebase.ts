import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
apiKey: "AIzaSyAdRnp6LLrWriY61HnpsCt1l_MZFL3ax7c",
  authDomain: "aromnest-push.firebaseapp.com",
  projectId: "aromnest-push",
  storageBucket: "aromnest-push.firebasestorage.app",
  messagingSenderId: "799806823794",
  appId: "1:799806823794:web:e328536b3b948c1ac251eb",
  measurementId: "G-WR5H9B68PQ"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };
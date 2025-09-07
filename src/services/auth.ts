// src/services/auth.ts
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// नया यूज़र रजिस्टर करना
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  // displayName सेट करना
  if (cred.user) {
    await updateProfile(cred.user, { displayName: name });
  }

  return cred.user; // ये User | null टाइप होगा
}

// लॉगिन करना
export async function loginUser(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

// लॉगआउट करना
export async function logoutUser() {
  await signOut(auth);
}

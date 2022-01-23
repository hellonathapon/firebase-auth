import { createUserWithEmailAndPassword } from "firebase/compat/auth";
import { auth } from "../firebase";

export const handleRegister = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.error(error.message);
  }
};

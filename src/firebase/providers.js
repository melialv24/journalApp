import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    // primero le mandamos y luego viene el provedor que quiero usar yo para
    // que aparezca el pop up
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };

    console.log({ user });
  } catch (error) {
    console.log(error, "errorrrrrrrrrrrrrrrrrr de googleeeeeeeeeeei");
    return {
      ok: false,
      errorMessage,
    };
  }
};

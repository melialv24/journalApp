import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("El uId del usuario no existe");
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  docs.forEach((doc) => {
    console.log(doc.data());
  });
};

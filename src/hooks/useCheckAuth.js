import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    //función de fireBase que es cuando el estado de autenticación cambia ejecute
    // la función que le mando como segundo parametro
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({}));
      const { email, uid, displayName, photoURL } = user;
      dispatch(login({ email, uid, displayName, photoURL }));
      dispatch(startLoadingNotes());
    });
  }, []);

  return {
    status,
  };
};

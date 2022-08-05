import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
    
        {/** con el slash alterisco lo que quiero decir 
         * es que cualquier ruta diferente a las declaradas anteriormente lo redirijan a el elemento que asigné aquí
         */}
        <Route path="/*" element={<Navigate to='/auth/login' />}/>
    </Routes>
  )
}

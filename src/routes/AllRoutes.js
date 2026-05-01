import { Route, Routes } from "react-router-dom";

import { Login, Register } from "../pages";



export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={ <Register /> } />

      <Route path="/login" element={ <Login /> } />

      <Route path="*" element={ <Login /> } />
    </Routes>
  )
}

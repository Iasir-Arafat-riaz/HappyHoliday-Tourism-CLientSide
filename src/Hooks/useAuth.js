import { useContext } from "react";
import { AuthContextAPI } from "../pages/AuthProvider/AuthProvider";

const useAuth =()=>useContext(AuthContextAPI)

export{useAuth}
import { useContext } from "react";

import { AuthContext } from "src/context/AuthContext";

export const RequiresAuth=({children})=>
{
    const {isLoggedIn}=useContext(AuthContext);
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/"/>
    )
}
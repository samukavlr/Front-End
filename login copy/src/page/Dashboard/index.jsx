import React,{useContext} from "react";
import { Context } from "../../Context/AuthContext";
import { Link } from "react-router-dom";


export const Dashboard=()=>{
    const token= localStorage.getItem('token')
    const {authenticated,handleLogout}=useContext(Context);

    console.log(`Situação do usuário na pagina Dashboard${authenticated}`)

    return(
        <>

        <ul>
            <li>
                <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
                <Link to="/usuarios">usuarios</Link>
            </li>
        </ul>
            <h1>Dashboard</h1>
            {/* <h3>Token: {token} </h3> */}
            <button type="button" onClick={handleLogout}>Sair</button>
        </>
    )
}
import React,{useContext} from "react";
import { Context } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


export const Dashboard=()=>{
    const token= localStorage.getItem('token')
    const {authenticated,handleLogout}=useContext(Context);

    console.log(`Situação do usuário na pagina Dashboard${authenticated}`)

    return(
        <>
            <Nav defaultActiveKey="/home" as="ul">          
                <Nav.Link> <Link to="/dashboard">dashboard</Link></Nav.Link>
                <Nav.Link> <Link to="/usuarios">usuarios</Link></Nav.Link>
                <Nav.Link>  <Link to="/usuarios/novo">Criar usuario</Link></Nav.Link>      
             </Nav>
            <h1>Dashboard</h1>
            {/* <h3>Token: {token} </h3> */}
            <button type="button" onClick={handleLogout}>Sair</button>
        </>
    )
}
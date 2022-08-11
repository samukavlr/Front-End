import React,{ useEffect, useState} from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Button } from "bootstrap";
import Nav from 'react-bootstrap/Nav';

export const ListaUsuarios =()=>{
    const [data, setData]= useState([]); 
    const [status, setStatus]=useState({
        type:'',
        mensagem:''
    })


    const getUser= async()=>{

        const valueToken=localStorage.getItem('token');

        const headers={
         'headers':{
            'Authorization':'Bearer '+ valueToken
         },
        } 
        await api.get("/users",headers)
        .then((response) =>{
            
            setData(response.data.users)


        }).catch((erro) =>{
            if(erro.response){
                setStatus({
                    type:'erro',
                    mensagem: erro.response.data.mesagem
                })
            } else{
                setStatus({    
                    type:'erro',
                    mensagem: 'Erro tente mais tarde!!!'

                })
            }

        })
    }
    useEffect( ()=>{
        getUser();
    },[])
    return(
        <>
        <Nav defaultActiveKey="/home" as="ul">          
            <Nav.Link> <Link to="/dashboard">dashboard</Link></Nav.Link>
            <Nav.Link> <Link to="/usuarios">usuarios</Link></Nav.Link>
            <Nav.Link>  <Link to="/usuarios/novo">Criar usuario</Link></Nav.Link>
                {/* <li>
                <li>
                    <Button> 
                        <Link className= "noLink" to={"usuarios/editar/"+user.id}>Editar</Link>   
                        </Button>
                        </li>
                        <Button variant= "outline-danger" onClick={() => handleDelete(user.id)}>
                        excluir
                        </Button>
                </li> */}
              
        </Nav>
        <h1>Usuarios</h1>
        {           
            data.map(user =>(
                <div key= {user.id}>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </div>
            ))
        }
        
          
        </>
    )
}
import React,{ useEffect, useState} from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

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
            'Authorization':'Bearer '+valueToken
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
        <ul>
            <li>
                <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
                <Link to="/usuarios">usuarios</Link>
            </li>
        </ul>
            
        <h1>Usuarios</h1>
        {           
            data.map(user =>(
                <div key= {user.id}>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </div>
            ))
        }
        
          
        </>
    )
}
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useHistory } from 'react-router-dom'
import { Alert, Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';



const initialValue={
    name: '',
    email:'',
    password:''
}

export const UsuariosForm =(props)=>{

    const history = useHistory()

    const[id] = useState(propos.match.params.id)
    console.log(id);
    const[ values,setValues] = useState(initialValue)
    const[acao,setAcao] = useState('Novo')
    const [status,setStatus] = useState({
        type:'',
        mensagem:'',
        loading:false
    }) 

    const valorInput = e => setValues({
        ...values,
        [e.target.name] : e.target.value
    })
    useEffect( () =>{
        const getUser= async()=>{

    
            const headers={
             'headers':{
                'Content-type': 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem('token')
             },
            } 
            await api.get("/users/"+id,headers)
            .then((response) =>{
              if(response.data.users){
                  
                  setData(response.data.users)
                  setAcao('editar');
            }else{
                status({
                    type:'warning',
                    mensagem :'Usuario não Encontrado!!!',
                })
            }
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

    },[id])

    const formSubmit = async e =>{
        e.preventDefault();
        setStatus({ loading:true})
        const headers = {
            'headers':{
                'Context-Type':'application/json',
                'Authorization':'Bearer ' + localStorage.getItem('token')
            }
    }
    if(id){
        await api.put
    }else{

    }
    await api.post("/user",values,headers)
        .then( (response) =>{
            console.log(response);
            // setStatus({loading:false})
            setStatus({
                type:'success',
                mensagem: response.data.mensagem,
                loading: false
            })
            return history.push('/usuarios')
        }).catch((err) =>{
            if(err.response){
                // console.log(err.response)
                setStatus({
                    type:'erro',
                    mensagem:err.response.data.mensagem,
                    loading:false
                })  
            } else{
                setStatus({
                    type: 'erro',
                    mensagem:'Erro, tente mais tarde',
                    loading:false
                 })
            }
        })
    }

return(

    <div>
        <Container className="box">
            <Form onSubmit={formSubmit} className="borderForm">
            {status.type=='erro'?<Alert variant="danger" ><p>{status.mensagem}</p></Alert>: ""}
            {status.type=='success'?<Alert variant="success" ><p>{status.mensagem}</p></Alert>: ""} 
            {status.loading ? <p>"Validando..."</p> : ""} 
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label> 
                <Form.Control type="name" name="name" value={values.name} onChange={valorInput} placeholder="Digite o Nome" />      
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email"  value={values.email} onChange={valorInput} placeholder="Digite seu Email.. " />
                <Form.Text className="text-muted">              
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="password" onChange={valorInput} placeholder="Digite sua senha" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            {status.loading
            ?<Button variant="primary" type="submit">Criando...</Button>
            :<Button variant="primary" type="submit">Criar</Button>
            }
            
            </Form>            
        </Container>
    </div>
)

}
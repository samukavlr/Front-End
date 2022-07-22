import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Alert } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './styles.css';
import api from '../../services/api';

export function Login(){
    const [user, setUser] = useState(
        {
            email: '',
            password:''
        }
    )
    const [status,setStatus]=useState(
        {
            type:'',
            mensagem:'',
            loading:false
        }
    )


    // function onChange(ev) {
    //     const { name, value } = ev.target;
    //     console.log({name, value});
    //     setValues( { ...values, [name]: value } )
    // }

    const valorInput = e => setUser({ 
        ...user, 
        [e.target.name]: e.target.value
    })

    const loginSubmit = async e =>{
        e.preventDefault();
        // console.log(user.email);
        // console.log(user.password);

        console.log(user);

        const headers = {
            'Content-Type': 'application/json'
        }

        setStatus({
            loading:true
        })
        
        await api.post("/login", user, {headers})
        .then((response) =>{
            // console.log(response);
            setStatus({
                type:'sucess',
                mensagem:response.data.mensagem,
                loading:false
            })
        }).catch((err) =>{
            setStatus({
                type:'erro',
                mensagem:'Erro, tente mais tarde',
                loading:false
            })
            if(err.response){
                // console.log(err.response)
                setStatus({
                    type:'erro',
                    mensagem:err.response.data.mensagem,
                    loading:false
                })
              
            } 
        })

    }


    return (
        <>
        <Container className="box">
            <Form onSubmit={loginSubmit} className="borderForm">
            {status.type=='erro'?<Alert><p>{status.mensagem}</p></Alert>:""}
            {status.type=='sucess'?<Alert><p>{status.mensagem}</p></Alert>:""} 

            {status.loading?<p>"Validando..."</p>:""}
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onChange={valorInput} placeholder="Entre com seu email" />
                <Form.Text className="text-muted">
                Nunca compartilharemos seu e-mail com mais ninguém.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="password" onChange={valorInput} placeholder="Digite sua senha" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
            </Form>            
        </Container>
        </>
    )
}
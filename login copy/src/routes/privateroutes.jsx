import React,{useContext} from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import { Context } from "../Context/AuthContext";

function CustomRoute({isPrivate,...rest}){
    const {authenticated}=useContext(Context)
    if(isPrivate && !authenticated){
        return<Redirect to ="/"/>
    }
    return <Route {...rest} />

} 

export default function PrivateRoute(){
    return(
        <Switch>
            <Route exact path="/" component ={Login}/>
            <Route path="/dashboard" component ={Dashboard}/>
        </Switch>
    )
}
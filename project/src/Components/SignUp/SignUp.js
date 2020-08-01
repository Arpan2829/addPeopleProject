import React, { Component } from 'react';
import FormEl from './formEl'
import {Table,Button,Image,Row,Col ,Form} from 'react-bootstrap'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

class Signup extends Component{
    state={
        formEl1:[
            {
                type:"text",
                placeholder:"First Name",
                id:"first_name",
                required:true,
                value:""
            },
            {
                type:"text",
                placeholder:"Last Name",
                id:"last_name",
                required:true,
                value:""
            },
            {
                type:"radio",
                label:"Gender",
                id:"gender",
                options:[['Male','Male'],['Female','Female'],['Other','Other']],
                required:true,
                value:""
            },
            {
                type:"email",
                placeholder:"E-Mail",
                id:"email",
                required:true,
                value:""
            },
            {
                type:"tel",
                pattern:"[6-9][0-9]{9}",
                placeholder:"Contact No.",
                id:"mobile",
                required:true,
                value:""
            },
            {
                type:"password",
                placeholder:"Password",
                id:"password",
                required:true,
                value:""
            }],
        formEl2:[
            {
                type:"text",
                placeholder:"Father's Name",
                id:"father_name",
                required:true,
                value:""
            },
            {
                type:"text",
                placeholder:"Mother's Name",
                id:"mother_name",
                required:true,
                value:""
            },
            {
                type:"select",
                label:"Qualification",
                id:"qualification",
                options:[[0,"---Select---"],['no qualification','No Qualification'],['matriculation','Matriculation'],['intermediate','Intermediate'],['graduate','Graduate'],['post graduate','Post Graduate'],['P.hD','P.hD']],
                required:true,
                value:""
            },
            {
                type:"select",
                label:"Occupation",
                id:"occupation",
                options:[[0,"---Select---"],['student','Student'],['employed','Employed'],['unemployed','Unemployed'],['businessman','Businessman']],
                required:true,
                value:""
            },
            {
                type:"text",
                placeholder:"Pan Number",
                id:"pan",
                required:true,
                value:""
            },
            {
                type:"text",
                placeholder:"Aadhar Number",
                id:"aadhar",
                required:true,
                value:""
            }
            
            
        ],
        formEl1Filled:false
    }

    handleChange=(event,key)=>{
        const val=event.target.value
        if(this.state.formEl1Filled){

        const updatedForm=[...this.state.formEl2]
        const updatedFormElement={...updatedForm[key]}
        updatedFormElement.value=val
        updatedForm[key]=updatedFormElement
        this.setState({formEl2:updatedForm})

        }
        else{

        const updatedForm=[...this.state.formEl1]
        const updatedFormElement={...updatedForm[key]}
        updatedFormElement.value=val
        updatedForm[key]=updatedFormElement
        this.setState({formEl1:updatedForm})
                                            
        }
        
    }

    changeForm=()=>{
        this.setState({formEl1Filled:true})
    }

    validate=()=>{
        return true
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        
        let data={}
        let proceed=true
        proceed=this.validate()
        if(!proceed){
            return
        }
        this.state.formEl1.forEach(val=>{
            data[val.id]=val.value
        })
        this.state.formEl2.forEach(val=>{
            data[val.id]=val.value
        })
        console.log(data)
        axios.post("http://localhost:8000/account/signup/",data).then(res=>{
            console.log(res.data)
        })
        


    }


    render=()=>{
        let key1=0
        let key2=0
        
        return (
            <Row>
            <Col md={8}>
                <div style={{"position":"sticky",
                "float":"left",
              }}>
            <Image src="https://source.unsplash.com/random" 
            style={{"height":"90vh",
             "width":"100%",
              "objectFit":"cover"}}
              ></Image></div>
            </Col>
            <Col>
            <div style={{"height":"100vh"}}>
                <center><h3>Sign Up</h3></center>   
            <Form onSubmit={this.handleSubmit}>

            {!this.state.formEl1Filled?
            this.state.formEl1.map(el=>{
                return <FormEl key={key1} {...el} mykey={key1++} change={this.handleChange}/>
            })
            :this.state.formEl2.map(el=>{
                return <FormEl key={key2} {...el} mykey={key2++} change={this.handleChange}/>
            })}

            {!this.state.formEl1Filled?
            <center>
                <Button varient="primary" onClick={this.changeForm}>{`Next>>`}</Button>
            </center>:
            <center>
            <NavLink to="/"><Button varient="primary" type="submit">Register</Button></NavLink>
            </center>
            }

            </Form>
            </div>
            </Col>
            </Row>
        )
    }
}

export default Signup
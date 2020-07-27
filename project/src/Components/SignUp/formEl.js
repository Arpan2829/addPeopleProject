import React from 'react';
import {Form} from 'react-bootstrap'

const formEl=(props)=>{
    //console.log(props)
    let el=""
    let key=0
    switch(props.type){
        
        case "text":    el=(
            <Form.Group>
                
                <Form.Label>{props.placeholder}:</Form.Label>
                
                
                <Form.Control {...props}
                 onChange={(event)=>props.change(event,props.mykey)} size="sm" />
            </Form.Group>

        )
        break;

        case "select": el=(
            <Form.Group>
                
                    <Form.Label>{props.label}</Form.Label>
                
                
                    <Form.Control as="select" size="sm" onChange={(event)=>props.change(event,props.mykey)}>
                        {props.options.map(val=>{
                            return <option key={key++} value={val[0]}>{val[1]}</option>
                        })}
                    </Form.Control>
                
            </Form.Group>
        )
        break

        case "password":    el=(
            <Form.Group>
                
                <Form.Label>{props.placeholder}:</Form.Label>
                
                
                <Form.Control {...props} onChange={(event)=>props.change(event,props.mykey)} size="sm" />
            </Form.Group>

        )
        break

        case "tel":    el=(
            <Form.Group>
                
                <Form.Label>{props.placeholder}:</Form.Label>
                
                
                <Form.Control {...props} onChange={(event)=>props.change(event,props.mykey)} size="sm" />
            </Form.Group>

        )
        break
        case "email":    el=(
            <Form.Group>
                
                <Form.Label>{props.placeholder}:</Form.Label>
                
                
                <Form.Control {...props} onChange={(event)=>props.change(event,props.mykey)} size="sm" />
            </Form.Group>

        )
        break
        case "radio":    el=(
            <Form.Group>
                
                <Form.Label>{props.label}:&nbsp;</Form.Label>
                
                
                    {props.options.map(val=>{
                        return <Form.Check key={key++} style={{"display":"inline"}}
                        onChange={(event)=>props.change(event,props.mykey)} type="radio" value={val[0]} 
                        label={val[1]} name={`${props.label}-radio`}/>
                    })}
                
            </Form.Group>

        )

    }

    return el

}

export default formEl
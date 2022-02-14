import React from 'react'
import { Form } from "react-bootstrap"

const InputField = (props) => {
    const { type, name, placeholder, label, handleChange, value } = props;

    return (
        <div className="input-field">
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control className="" type={type} name={name} placeholder={placeholder} onChange={(e) => handleChange(e)} value={value}/>
        </div>
    )
}

export default InputField;
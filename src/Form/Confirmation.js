import React, { useState, useEffect, useContext }from 'react';
import axios from 'axios';
import { Form, Input, Button, InputNumber, Switch, Select, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Context } from '../State/Store';
import { useNavigate } from 'react-router-dom';



export default function Confirmation(props) {
    // For passing props to each component
    // let { prospect } = props;
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const baseURL = "http://localhost:5000";
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);  
    // State Management with context  
    const [state, dispatch] = useContext(Context);
    let { prospect } = state;
    console.log("prospect", state)
    

    const back = () => {
        console.log("BACK VALUES BEFORE", form.getFieldsValue())
        // const values = form.getFieldsValue();
        // for(let i = 0; i < values)
        // form.resetFields();

        // form.setFieldsValue()
        dispatch({ type: 'CLEAR_PROSPECT_INFO', payload: "" });
        navigate('/')
    }
    
    let package_type = {
        0: "Standard",
        1: "Bronze",
        2: "Silver"
    };

    const onFinish = (values) => {
        dispatch({ type: 'CHANGE_NUMBER', payload: 0})
        if(values.package == "Standard"){
            // If user wants the free package (standard)
            axios.post(`${baseURL}/api/prospects`, values)
                .then(res => {
                    // SEND TO SUCCESS PAGE AND THANK YOU FOR SUBMISSION
                    setMessage(res.data.message)
                    setSuccess(true)
                })
                .catch(err => console.log("err", err.message))
            // Push directly to database
        } else {
            fetch(`${baseURL}/api/stripe/create-checkout-session`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify({
                    packages: [
                        { package: values.package, quantity: 1 }
                    ],
                }),
            })
            .then(res => {
                if(res.ok) return res.json()
                axios.post(`${baseURL}/api/prosects`, values)
                    .then(res => console.log("posting new prospect", res))
                    .catch(err => console.log("post error", err.message))
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            }).catch(e => {
                console.error(e.error)
            })

        }
            // Else Go to payment page for processing
            // 1. Payment is approved
            // 2. add to data base




    };

    return (
        <div>
            {success ? 
            <div>{message}</div> 
            :
        <div>
            <h3>Please Confirm If Information is Correct</h3>
            <h1>{state.number}</h1>
            <Form
                form={form}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    first_name: prospect.first_name,
                    last_name: prospect.last_name,
                    email: prospect.email,
                    grad_year: prospect.grad_year,
                    state: prospect.state,
                    highschool: prospect.highschool,
                    ft: prospect.ft,
                    in: prospect.in,
                    wt: prospect.wt,
                    primary_pos: prospect.primary_pos,
                    secondary_pos: prospect.secondary_pos,
                    hudl: prospect.hudl,
                    twitter: prospect.twitter,
                    gpa: prospect.gpa,
                    package: prospect.package !== null ? `${package_type[prospect.package]}` : '',
                }}
                onFinish={onFinish}
            >
                <Form.Item 
                    label="First Name" 
                    name="first_name" 
                >
                    <Input />   
                </Form.Item>         
                <Form.Item 
                    label="Last Name" 
                    name="last_name" 
                >
                    <Input/>
                </Form.Item>
                <Form.Item 
                    label="Email" 
                    name="email" 
                >
                    <Input/>
                </Form.Item>
                {/* <Form.Item 
                    label="Password" 
                    name="password" 
                >
                    // <Input style={{ }}/>
                </Form.Item> */}
                <Form.Item 
                    label="Graduation Year" 
                    name="grad_year" 
                    style={{ display: "flex", margin: '0'}}
                >
                    <Input/>
                </Form.Item>
                <Form.Item 
                    label="State" 
                    name="state" 
                >
                    <Input/>
                </Form.Item>
                <Form.Item 
                    label="High School" 
                    name="highschool" 
                    style={{ marginBottom: "2%"}}
                >
                    <Input/>
                </Form.Item>
                <Form.Item 
                    label="Height and Weight"
                    style={{ 
                        margin: "0",
                    }}
                >
                    <Form.Item 
                        name="ft"
                        style={{
                            display: 'inline-block',
                            paddingLeft: "2%"
                        }}
                    >
                        <Form.Item>
                            <InputNumber/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item 
                        name="in"
                        style={{
                            display: 'inline-block',
                            paddingLeft: "2%"
                        }}>
                        <Form.Item>
                            <InputNumber/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item 
                        name="wt"
                        style={{
                        display: 'inline-block',
                        paddingLeft: "2%"
                    }}>
                        <Form.Item>
                            <InputNumber/>
                        </Form.Item>
                    </Form.Item>
                </Form.Item>
                <Form.Item 
                    style={{ margin: "0%"}}
                >
                    <div style={{ width: '100%'}}>
                        <div style={{ display: 'flex', justifyContent: "space-between"}}>
                            <Form.Item label="Primary Position" name="primary_pos" style={{ width: '45%', fontSize: '2px'}}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label="Secondary Position" name="secondary_pos" style={{ width: '45%', fontSize: '2px'}}>
                                <Input/>
                            </Form.Item>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item 
                    label="Film URL" 
                    name="hudl" 
                >
                    <Input/>
                </Form.Item>
                <Form.Item 
                    label="Twitter" 
                    name="twitter" 
                >
                    <Input/>
                </Form.Item>
                <Form.Item label="GPA" name="gpa" >
                    <Input/>
                </Form.Item>
                <Form.Item >
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <label style={{ marginRight: '5%'}}>Camps?</label>
                        <Form.Item name="camps" valuePropName='checked'>
                            <Switch style={{ width: '20%'}}/>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item 
                    name="package" 
                    label="Type of Package"
                >
                    <Input/>
                </Form.Item>
                <Form.Item >
                    <div style={{ display: "flex", justifyContent: 'space-evenly'}}>
                        <Button htmlType="button" onClick={back}>Back</Button>
                        <Button type="primary" htmlType="submit">
                            {prospect.package == 0 ? 'Submit' : "To Payment"}
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
        }
    </div>
    )
}

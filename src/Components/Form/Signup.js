import React, { useState, useContext, useEffect } from 'react'
import { Form, Input, Button, InputNumber, Switch, Select, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import Confirmation from './Confirmation';
import { Link } from 'react-router-dom';
import { Context } from '../State/Store';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
export default function Signup(props) {
    const baseURL = "http://localhost:5000";
    const [state, dispatch] = useContext(Context)
    const navigate = useNavigate();
    
    const onFinish = (values) => {
        if(values.ft !== undefined && values.in !== undefined && values.wt !== undefined){
            values.ft = parseFloat(values.ft);
            values.in = parseFloat(values.in);
            values.wt = parseFloat(values.wt);
        }
        dispatch({ type: 'SAVE_PROSPECT_INFO', payload: values})
        navigate('/confirmation')
    };

    const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


    function onChange(value) {
        console.log(`selected ${value}`);
      }
      
      function onSearch(val) {
        console.log('search:', val);
      }

    const back = () => {
        navigate('/')
    };
    
    const formStyle = {
        margin: '0',
        fontWeight: 'bold'
    };

    return (
        <div className="sign-up">
            <div className="sign-up-content">
            <h1>Next Big Prospect</h1>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onFinish={onFinish}
                
            >
                <Form.Item 
                    label="First Name" 
                    name="first_name" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide first name' }]}
                >
                    <Input style={{ border: "1px solid orange"}}/>
                </Form.Item>
                <Form.Item 
                    label="Last Name" 
                    name="last_name" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide last name' }]}
                >
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item 
                    label="Email" 
                    name="email" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide email' }]}
                >
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item 
                    label="Password" 
                    name="password" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'You need a password' }]}
                >
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item 
                    label="Graduation Year" 
                    name="grad_year" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide grad year' }]}
                >
                    <InputNumber style={{ width: '100%'}}/>
                </Form.Item>
                <Form.Item 
                    label="State" 
                    name="state" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide state' }]}
                >
                    <Select
                        // showSearch
                        onChange={onChange}
                        placeholder="Select a State"
                    >
                        {states.map((state, index) => {
                            console.log("state", state, "index", index)
                            return <Option key={index} value={state}>{state}</Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item 
                    label="High School" 
                    name="highschool" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide high school' }]}
                >
                    <Input style={{ width: "80%" }}/>
                </Form.Item>
                <Form.Item 
                    label="Height and Weight"
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide height and weight' }]}
                >
                    <Form.Item 
                        name="ft"
                        style={{
                            display: 'inline-block',
                            paddingLeft: "2%"
                        }}
                    >
                        <Form.Item>
                            <InputNumber placeholder='FT'/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item 
                        name="in"
                        style={{
                            display: 'inline-block',
                            paddingLeft: "2%"
                        }}>
                        <Form.Item>
                            <InputNumber placeholder='IN'/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item 
                        name="wt"
                        style={{
                        display: 'inline-block',
                        paddingLeft: "2%"
                    }}>
                        <Form.Item>
                            <InputNumber placeholder='WT'/>
                        </Form.Item>
                    </Form.Item>
                </Form.Item>
                <Form.Item 
                    style={formStyle}
                >
                    <div style={{ width: '100%'}}>
                        <div style={{ display: 'flex', justifyContent: "space-between"}}>
                            <Form.Item label="Primary Position" name="primary_pos" style={{ width: '45%', fontSize: '2px'}}>
                                <Input style={{ }}/>
                            </Form.Item>
                            <Form.Item label="Secondary Position" name="secondary_pos" style={{ width: '45%', fontSize: '2px'}}>
                                <Input style={{ }}/>
                            </Form.Item>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item 
                    label="Film URL" 
                    name="hudl" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide your film URL' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    label="Twitter" 
                    name="twitter" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Need your twitter for the shoutout' }]}
                >
                    <Input addonBefore={"@"}/>
                </Form.Item>
                <Form.Item label="GPA" name="gpa" style={formStyle}>
                    <Input />
                </Form.Item>
                <Form.Item >
                    <div style={{ display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold' }}>
                        <label style={{ marginRight: '5%'}}>Camps?</label>
                        <Form.Item name="camps" valuePropName='checked'>
                            <Switch style={{ width: '20%'}}/>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item 
                    name="package" 
                    label="Type of Package"
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please select desired package.' }]}
                >
                    <Radio.Group>
                        <Radio value={0}>Free <InfoCircleOutlined /></Radio>
                        <Radio value={1}>Standard <InfoCircleOutlined /></Radio>
                        <Radio value={2}>Advanced <InfoCircleOutlined /></Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item >
                    <div style={{ display: "flex", justifyContent: 'space-evenly'}}>
                        <Button onClick={back}>Cancel</Button>
                        <Button type="primary" htmlType="submit">Continue</Button>
                    </div>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}

import React, { useState, useContext } from 'react'
import { Form, Input, Button, InputNumber, Switch, Select, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import Confirmation from './Confirmation';
import { Link } from 'react-router-dom';
import { Context } from '../State/Store';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [ prospect, setProspect ] = useState();
    const [ isVisible, setIsVisible ] = useState(false);
    const baseURL = "http://localhost:5000";
    const [state, dispatch] = useContext(Context)
    const navigate = useNavigate();
    
    const onFinish = (values) => {
        setProspect(values)
        console.log("values", values)
        dispatch({ type: 'SAVE_PROSPECT_INFO', payload: values})
        navigate('/confirmation')
    };

    const formStyle = {
        margin: '0'
        // display: 'flex', padding: "2%", border: '1px solid red', alignItems: "flex-start", justifyContent: "space-around"
    };
    return (
        <div style={{ padding: '5%'}}>
            <h1>Next Big Prospect</h1>
            {!isVisible ? 
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
                    style={{ display: "flex", margin: '0'}}
                    // rules={[{ required: true, message: 'Please provide grad year' }]}
                >
                    <InputNumber style={{ width: '50%'}}/>
                </Form.Item>
                <Form.Item 
                    label="State" 
                    name="state" 
                    style={formStyle}
                    // rules={[{ required: true, message: 'Please provide state' }]}
                >
                    <Select style={{ }}>
                        <Select.Option value="CT">CT</Select.Option>
                        <Select.Option value="GA">GA</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item 
                    label="High School" 
                    name="highschool" 
                    style={{ marginBottom: "2%"}}
                    // rules={[{ required: true, message: 'Please provide high school' }]}
                >
                    <Input style={{ width: "80%" }}/>
                </Form.Item>
                <Form.Item 
                    label="Height and Weight"
                    style={{ 
                        margin: "0",
                    }}
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
                    style={{ margin: "0%"}}
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
                    // rules={[{ required: true, message: 'Please provide your film URL' }]}
                >
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item 
                    label="Twitter" 
                    name="twitter" 
                    // rules={[{ required: true, message: 'Need your twitter for the shoutout' }]}
                >
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item label="GPA" name="gpa" >
                    <Input style={{ }}/>
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
                    // rules={[{ required: true, message: 'Please select desired package.' }]}
                >
                    <Radio.Group>
                        <Radio value={0}>Standard <InfoCircleOutlined /></Radio>
                        <Radio value={1}>Bronze <InfoCircleOutlined /></Radio>
                        <Radio value={2}>Silver <InfoCircleOutlined /></Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item >
                    <div style={{ display: "flex", justifyContent: 'space-evenly'}}>
                        {/* <Button onClick={cancel}>Cancel</Button> */}
                        <Button type="primary" htmlType="submit">Continue</Button>
                    </div>
                </Form.Item>
            </Form>
            : 
            <Confirmation prospect={prospect}/>
            }
        </div>
    )
}

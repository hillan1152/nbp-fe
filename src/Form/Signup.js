import React, { useState } from 'react'
import { Form, Input, Button, InputNumber, Switch, Select, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Confirmation from './Confirmation';
export default function Signup(props) {
    const [ prospect, setProspect ] = useState();
    // const [form] = Form.useForm();
    const onFinish = (values) => {
        setProspect(values)
        if(values.package == 0){
            console.log(prospect)
        } else {
            fetch("http://localhost:5000/api/stripe/create-checkout-session", {
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
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            }).catch(e => {
                console.error(e.error)
            })

        }
    };
    const formStyle = {
        margin: '0'
        // display: 'flex', padding: "2%", border: '1px solid red', alignItems: "flex-start", justifyContent: "space-around"
    };
    return (
        <div style={{ padding: '5%'}}>
            <h1>Next Big Prospect</h1>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                // style={{ width: "100%", border: '1px solid black'}}
                layout="horizontal"
                // form={form}
                onFinish={onFinish}
            >
                <Form.Item label="First Name" name="first_name" style={formStyle}>
                {/* <Form.Item label="First Name" style={{ display: 'flex', justifyContent: "center", width: "80%", padding: "2%" }}> */}
                    <Input style={{ border: "1px solid orange"}}/>
                </Form.Item>
                <Form.Item label="Last Name" name="last_name" style={formStyle}>
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item label="Email" name="email" style={formStyle}>
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item label="Password" name="password" style={formStyle}>
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item label="Graduation Year" name="grad_year" style={{ display: "flex", margin: '0'}}>
                    <InputNumber style={{ width: '50%'}}/>
                </Form.Item>
                <Form.Item label="State" name="state" style={formStyle}>
                    <Select style={{ }}>
                        <Select.Option value="CT">CT</Select.Option>
                        <Select.Option value="GA">GA</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="High School" name="highschool" style={{ marginBottom: "2%"}}>
                    <Input style={{ width: "80%" }}/>
                </Form.Item>
                <Form.Item label="Height and Weight"
                    style={{ 
                        margin: "0",
                    }}
                >
                    <Form.Item name="ft"
                        style={{
                            display: 'inline-block',
                            paddingLeft: "2%"
                        }}
                    >
                        <Form.Item>
                            <InputNumber placeholder='FT'/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item name="in"
                        style={{
                            display: 'inline-block',
                            paddingLeft: "2%"
                        }}>
                        <Form.Item>
                            <InputNumber placeholder='IN'/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item name="wt"
                        style={{
                        display: 'inline-block',
                        paddingLeft: "2%"
                    }}>
                        <Form.Item>
                            <InputNumber placeholder='WT'/>
                        </Form.Item>
                    </Form.Item>
                </Form.Item>
                <Form.Item style={{ margin: "0%"}}>
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
                <Form.Item label="Film URL" name="hudl" >
                    <Input style={{ }}/>
                </Form.Item>
                <Form.Item label="Twitter" name="twitter" >
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
                <Form.Item name="package" label="Type of Package">
                    <Radio.Group>
                        <Radio value={0}>Standard <InfoCircleOutlined /></Radio>
                        <Radio value={1}>Bronze <InfoCircleOutlined /></Radio>
                        <Radio value={2}>Silver <InfoCircleOutlined /></Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item >
                    <div style={{ display: "flex", justifyContent: 'space-evenly'}}>
                        <Button htmlType="cancel">Cancel</Button>
                        <Button type="primary" htmlType="submit">Continue</Button>
                        {/* <Link to="/confirmation" state={prospect}><Button type="primary">Continue</Button></Link> */}
                    </div>
                </Form.Item>
            </Form>
        </div>


    )
}

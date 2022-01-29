import React, { useEffect }from 'react';
import axios from 'axios';
import { Form, Input, Button, InputNumber, Switch, Select, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export default function Confirmation(props) {
    let { prospect } = props;
    const [form] = Form.useForm();
    const baseURL = "http://localhost:5000"
    let package_type = {
        0: "Standard",
        1: "Bronze",
        2: "Silver"
    };

    const onFinish = (values) => {
        if(values.package == "Standard"){
            // If user wants the free package (standard)
            console.log("values", values.package)
            axios.post(`${baseURL}/api/prospects`, values)
                .then(res => console.log("res", res))
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
            <h3>Please Confirm If Information is Correct</h3>
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
                        <Button htmlType="cancel">Cancel</Button>
                        <Button type="primary" htmlType="submit">
                            {prospect.package == 0 ? 'Submit' : "To Payment"}
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

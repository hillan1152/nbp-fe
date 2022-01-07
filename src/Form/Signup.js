import React, { useState } from 'react'
import { Form, Input, Button, InputNumber, Switch, Select } from 'antd';

export default function Signup() {
    const [ prospect, setProspect ] = useState();
    // const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("values", values)
        // Use to submit values when entered
        // will use an are you sure you want to submit? Value
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
                {/* <div style={{ width: '100%'}}>
                    <label style={{ display: 'flex', fontSize: '14px', height: '32px'}}>Height and Weight</label>
                    <div style={{ display: 'flex', justifyContent: "space-between"}}>
                        <Form.Item name="ft">
                            <InputNumber style={{ width:"50%" }}/>
                            <label style={{ marginLeft: '4%'}}>Ft</label>
                        </Form.Item>
                        <Form.Item name="in">
                            <InputNumber style={{ width:"50%" }}/>
                            <label style={{ marginLeft: '4%'}}>In</label>
                        </Form.Item>
                        <Form.Item name="wt">
                            <InputNumber style={{ width:"60%" }}/>
                            <label style={{ marginLeft: '4%'}}>Wt</label>
                        </Form.Item>
                    </div>
                </div> */}
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
                <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>


    )
}

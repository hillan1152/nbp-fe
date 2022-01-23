import React from 'react'
import { Input, Button } from 'antd';

export default function Confirmation(props) {
    let { prospect } = props;
  
    let package_type = {
        1: "Standard",
        2: "Bronze",
        3: "Silver"
    };
    console.log(package_type[1])
    return (
        <div>
            <h3>Please Confirm If Information is Correct</h3>
            <div style={{ display: 'flex'}}>
                <h4>Name: </h4>
                <Input defaultValue={prospect.first_name.length ? prospect.first_name : ''}/>            
                <Input defaultValue={prospect.last_name.length ? prospect.last_name : ''}/>            
            </div>
            <div style={{ display: 'flex'}}>
                <h4>Email: </h4>
                <Input defaultValue={prospect.email.length ? prospect.email : ''}/>            
            </div>
            <div style={{ display: 'flex'}}>
                <h4>Graduation Year: </h4>
                <Input defaultValue={prospect.grad_year.length ? prospect.grad_year : ''}/>            
            </div>
            <div style={{ display: 'flex'}}>
                <h4>State: </h4>
                <Input defaultValue={prospect.state.length ? prospect.state : ''}/>            
            </div>
            <div style={{ display: 'flex'}}>
                <h4>High School: </h4>
                <Input defaultValue={prospect.highschool.length ? prospect.highschool : ''}/>            
            </div>
            <div style={{ display: 'flex'}}>
                <h4>Height and Weight: </h4>
                <Input defaultValue={prospect.ft.length ? prospect.ft : ''}/>            
                <Input defaultValue={prospect.in.length ? prospect.in : ''}/>            
                <Input defaultValue={prospect.wt.length ? prospect.wt : ''}/>            
            </div>
            <div style={{ display: 'flex'}}>
                <h4>Primary Position: </h4>
                <Input defaultValue={prospect.primary_pos.length ? prospect.primary_pos : ''}/>                      
            </div>
            <div style={{ display: 'flex'}}>
                <h4>Secondary Position: </h4>
                <Input defaultValue={prospect.secondary_pos !== null ? prospect.secondary_pos : ''}/>                      
            </div>
            <div style={{ display: 'flex'}}>
                <h4>Film URL: </h4>
                <Input defaultValue={prospect.hudl.length ? prospect.hudl : ''}/>                      
            </div>
            <div style={{ display: 'flex'}}>
                <h4>GPA: </h4>
                <Input defaultValue={prospect.gpa.length ? prospect.gpa : ''}/>                      
            </div>
            <div style={{ display: 'flex'}}>
                <h4>Package: </h4>
                <Input 
                    defaultValue={prospect.package.length 
                        ? 
                        package_type[prospect.package]
                        : 
                        ''
                    }
                />                      
            </div>
            <Button type="primary">Confirm</Button>
        </div>
    )
}

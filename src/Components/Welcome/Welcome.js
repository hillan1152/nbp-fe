import React from 'react';
import { Button, Card, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
// import "../../Styles/Welcome.css";
import Connor from '../../Images/conner.jpg';
import NBPBackground from '../../Images/NBPBackground.jpeg';

export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div className='welcome-div'>
            <img src={NBPBackground} alt="NBP Background Logo" className='nbp-background'/>
            <h4>Click to Start Ranking</h4>
            <Button type="primary" onClick={() => navigate('/signup')}>Sign Up</Button>
            <section className="packages">
                <h2 style={{ fontSize: '2rem', marginTop: '2%'}}>Evaluation Packages</h2>
                <section className='package-align'>
                    <Card className='package' bordered>
                        <List.Item className='card-title'>
                            <Typography.Text style={{ color: 'black'}}><b>Free</b></Typography.Text>
                        </List.Item>
                        <List.Item style={{ fontSize: '1.5rem', display: 'flex', justifyContent:'center', }}>
                            <Typography.Text style={{ color: 'red'}}><b>Price:</b> $0</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>- Added to Prospect Wait List</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>- Added to Database</Typography.Text>
                        </List.Item>
                    </Card>
                    <Card className='package' bordered>
                    {/* <Card className='package' bordered> */}
                        <List.Item className='card-title'>
                            <Typography.Text style={{ color: 'black'}}><b>Standard</b></Typography.Text>
                        </List.Item>
                        <List.Item style={{ fontSize: '1.5rem', display: 'flex', justifyContent:'center', }}>
                            <Typography.Text style={{ color: 'red'}} ><b>Price:</b> $14.99</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>- Ranking Within 7 Days </Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>- Added to Database</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>- Shoutout on Social Media</Typography.Text>
                        </List.Item>
                    </Card>
                    <Card className='package' bordered>
                        <List.Item className='card-title'>
                            <Typography.Text style={{ color: 'black'}}><b>Advanced</b></Typography.Text>
                        </List.Item>
                        <List.Item style={{ fontSize: '1.5rem', display: 'flex', justifyContent:'center', }}>
                            <Typography.Text style={{ color: 'red'}}><b>Price:</b> $24.99</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>- All Standard Package Items</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>- Prospect Writeup</Typography.Text>
                        </List.Item>
                    </Card>
                </section>
            </section>
        </div>
    )
}

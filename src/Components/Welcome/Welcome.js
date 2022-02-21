import React from 'react';
import { Button, Card, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
// import "../../Styles/Welcome.css";

export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div className='welcome-div'>
            <h1>Next Big Prospect</h1>
            <h4>Click to Start Ranking</h4>
            <Button type="primary" onClick={() => navigate('/signup')}>Sign Up</Button>
            <section className="packages">
                <h2 style={{ fontSize: '2rem', marginTop: '2%'}}>Package Type</h2>
                <section className='package-align'>
                    <Card className='package' bordered>
                        <List.Item className='card-title'>
                            <Typography.Text><b>Free</b></Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text><b>Price:</b> Free</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>On Prospect Grading List</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Added to Database</Typography.Text>
                        </List.Item>
                    </Card>
                    <Card className='package' bordered>
                        <List.Item className='card-title'>
                            <Typography.Text><b>Standard</b></Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text><b>Price:</b> $14.99</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Guarenteed Ranking Within 5 Days</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Added to Database</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Shoutout on Social Media</Typography.Text>
                        </List.Item>
                    </Card>
                    <Card className='package' bordered>
                        <List.Item className='card-title'>
                            <Typography.Text><b>Advanced</b></Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text><b>Price:</b> $24.99</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>All Standard Package Items</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Prospect Writeup</Typography.Text>
                        </List.Item>
                    </Card>
                </section>
            </section>
        </div>
    )
}

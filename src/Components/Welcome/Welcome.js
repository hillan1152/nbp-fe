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
                <h2>Package Type</h2>
                <section className='package-align'>
                    <Card title="Free">
                        {/* <h3>Price: Free</h3> */}
                        <List.Item>
                            <Typography.Text>Description: Adds you to our database and prospect list.</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Added to prospect list</Typography.Text>
                        </List.Item>
                    </Card>
                    <div className='single-package'>
                        <h2>Standard</h2>
                        <h3>Price: $14.99</h3>
                        <p>Description: Guarenteed Ranking and Shoutout</p>
                        <ul>
                            <li>Guarenteed Ranking within 5 Days</li>
                            <li>Shoutout on Social Media</li>
                        </ul>
                    </div>
                    <div className='single-package'>
                        <h2>Advanced</h2>
                        <h3>Price: $24.99</h3>
                        <p>Description: Ranking and Writeup</p>
                        <ul>
                            <li>All Items from Standard Package</li>
                            <li>Prospect Writeup</li>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    )
}

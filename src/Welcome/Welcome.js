import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>THE WELCOME PAGE</h1>
            <Button type="primary" onClick={() => navigate('/signup')}>Sign Up</Button>
        </div>
    )
}

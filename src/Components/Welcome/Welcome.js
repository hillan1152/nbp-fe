import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import "../../Styles/Welcome.css";

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Next Big Prospect</h1>
            <h4>Click to Start Ranking</h4>
            <Button type="primary" onClick={() => navigate('/signup')}>Sign Up</Button>
            <section className="packages">
                <h2>TEST</h2>
            </section>
        </div>
    )
}

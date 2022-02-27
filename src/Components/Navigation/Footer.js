import React from 'react'
import { TwitterOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <div className="footer-container">
        <h3>Contact Us</h3>
        <div className="footer-icons" >
            <TwitterOutlined />
            <InstagramOutlined />
            <MailOutlined />
        </div>
    </div>
  )
}

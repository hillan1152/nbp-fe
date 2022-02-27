import React, { useState }  from 'react';
import LOGO from '../../Images/Logo.png';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu; 
export default function Navigation() {  
    const { collapsed, setCollapsed } = useState(false);

    return (
        <div style={{ display: "flex"}}> 
            <img src={LOGO} alt="NBP Logo" style={{ width: '20%'}}/>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="horizontal"
                // theme="dark"
                inlineCollapsed={true}            
            >
                <Menu.Item key="1" icon={<PieChartOutlined/>}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="1" icon={<PieChartOutlined/>}>
                    Option 2
                </Menu.Item>
                <Menu.Item key="1" icon={<PieChartOutlined/>}>
                    Option 3
                </Menu.Item>
            </Menu>
        </div>
    )
}

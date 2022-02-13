import React, { useState, useEffect, useContext }from 'react';
import { Context } from '../State/Store';
import { Modal, Button, Space } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

export default function Message(props) {
    const [state, dispatch] = useContext(Context);
    const [message, setMessage] = useState("")

    useEffect(() => {
        if(state.message.length){
            setMessage(state.message)
        }
        setMessage("")
    }, [state.message])
    
    const handleOK = () => {
        setMessage("")
        dispatch({ type: 'CLEAR_MESSAGE' });
    };

    return (
        // <Modal visible={state.isVisible} onOk={handleOK}>
        //     <h1>{state.message}</h1>
        // </Modal>;
        <Space wrap>
            {state.message.includes("successfully") ? 
            <Modal 
                visible={state.isVisible} 
                onOk={handleOK} 
                closeIcon={<CheckCircleTwoTone style={{ marginTop: '2%',fontSize: '2em'}} twoToneColor="#52c41a" />}>
                <h2>Prospect Confirmed</h2>
                <p>{state.message}</p>
            </Modal>
            : ''}
        </Space>
    )
}

import { Card, Form, Input, Button, Image, Divider } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [id, setId] = useState('')
    const [idError, setIdError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const onLogin = () => {
        if (id === '') {
            setIdError('Please enter id')
        } else if (password === '') {
            setPasswordError('Please enter password')
        } else if (id !== '10200') {
            setIdError('Id is incorrect')
        } else if (password !== 'adminLogin') {
            setPasswordError('Password is incorrect')
        } else {
            navigate('/home')
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card>
                <div style={{ fontSize: 30, marginLeft: 5, }}>ADMIN</div>
                <Image
                    src={require('../../assets/logo.png')}
                    style={{ height: 100, width: 300 }}
                    preview={false}
                />
                <Divider />
                <Form layout='vertical'>
                    <Form.Item label={'Id'}>
                        <Input
                            value={id}
                            onChange={(e) => {
                                setId(e.target.value);
                                setIdError('')
                            }}
                        />
                        {
                            idError !== '' &&
                            <div style={{ color: 'red', fontStyle: 'italic' }}>
                                {idError}
                            </div>
                        }
                    </Form.Item>
                    <Form.Item label={'Password'}>
                        <Input
                            value={password}
                            type={'password'}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError('')
                            }}
                        />
                        {
                            passwordError !== '' &&
                            <div style={{ color: 'red', fontStyle: 'italic' }}>
                                {passwordError}
                            </div>
                        }
                    </Form.Item>
                </Form>
                <Button onClick={onLogin}>login</Button>
            </Card>
        </div>
    )
}

export default Login
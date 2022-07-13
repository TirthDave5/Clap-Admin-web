import { Card, Form, Input, Button, InputNumber, Select } from 'antd';
import React from 'react';
import users from '../../assets/Constants/users.json';

const { Option } = Select;
const { TextArea } = Input;

function GenerateCoupons() {

    return (
        <Card title={'Generate Coupon'} style={{ margin: 20 }}>
            <Form layout='vertical'>
                <Form.Item label={'User'} required>
                    <Select defaultValue="Select User" style={{ width: 150 }}>
                        {users.map((i) => (
                            <Option value={i.mobileNo}>{i.mobileNo}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 8 }} label={'Description'}>
                    <TextArea rows={2} placeholder='Enter coupon detail' />
                </Form.Item>

                <Form.Item label={'Amount'} required>
                    <InputNumber value={80} required />
                </Form.Item>
                <Form.Item>
                    <Button type='primary'>Generete</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default GenerateCoupons
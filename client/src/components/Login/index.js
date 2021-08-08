import React, {useContext, useEffect, useState} from 'react';

import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {HiOutlineMail} from "react-icons/all";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";

const Login = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();

    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect( () => {
        message(error, 'error');
        clearError();
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const onFinish = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId)
        } catch (e) {}
    };

    return (
        <div>
            <Typography.Title>Log In</Typography.Title>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input
                        prefix={<HiOutlineMail className="site-form-item-icon" />}
                        placeholder="Email"
                        type="email"
                        onChange={changeHandler}
                        name="email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={changeHandler}
                        name="password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link className="login-form-forgot" to="/">
                        Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={loading}
                    >
                        Log in
                    </Button>
                </Form.Item>
                <div>Or <Link to="/signup">register now!</Link></div>
            </Form>
        </div>

    );
};

export default Login;
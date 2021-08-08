import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form, Input, Typography} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {HiOutlineMail} from "react-icons/all";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";

const Signup = () => {
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();

    const [form, setForm] = useState({
        email: '', password: '', lastName: '', firstName: ''
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
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message,'success')
        } catch (e) {}
    };
    return (
        <div>
            <Typography.Title>Sign up</Typography.Title>
            <Form
                name="normal_login"
                className="signup-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="firstname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your First name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="First Name"
                        name="firstName"
                        onChange={changeHandler}
                    />
                </Form.Item>
                <Form.Item
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Last name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Last Name"
                        name="lastName"
                        onChange={changeHandler}
                    />
                </Form.Item>
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
                        name="email"
                        onChange={changeHandler}
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
                        name="password"
                        onChange={changeHandler}
                    />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm password"/>
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>By checking this box I accept Terms of Service</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button disabled={loading} type="primary" htmlType="submit" className="login-form-button">
                        Sign up
                    </Button>

                </Form.Item>
                <div>
                    Already have an account? <Link to="/login">Log in!</Link>
                </div>
            </Form>
        </div>
    );
};

export default Signup;
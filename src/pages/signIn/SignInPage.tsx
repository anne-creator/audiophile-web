import React from "react";
import styles from './SignInPage.module.scss'
import { Form, Input, Button, Checkbox } from "antd";
import { signIn } from '../../redux/user/slice'
import { UserLayout } from '../../layouts/userLayout'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/hooks'
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from "react";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export const SignInPage = (props) => {
    const loading = useSelector(s => s.user.loading);
    const error = useSelector(s => s.user.error);
    const jwt = useSelector(s => s.user.token);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (jwt != null) {
            history.push('/');
        }
    })

    const onFinish = (values: any) => {
        dispatch(signIn({
            email: values.username,
            password: values.password,
        }))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <UserLayout>
            <h1 className={styles['Signin__title']} >Sign In</h1>
            <div className={styles['signin__container']} >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className={styles["register-form"]}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button className={styles['button-primary']} type="primary" htmlType="submit" loading={loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Link to="/register">
                    <p className={styles['Signin__go-register']}>Don't have an account yet, Go register</p>
                </Link>
            </div>
        </UserLayout>
    );
};
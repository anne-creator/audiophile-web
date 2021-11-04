import React from "react";
import styles from './RegisterPage.module.scss'
import { UserLayout } from '../../layouts/userLayout'
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
axios.defaults.headers['x-icode'] = '97FB43CDC6B38D23'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export const RegisterPage = () => {
    const history = useHistory();

    const onFinish = async (values: any) => {
        console.log("Success:", values);
        try {
            await axios.post("http://123.56.149.216:8080/auth/register", {
                email: values.username,
                password: values.password,
                confirmPassword: values.confirm,
            });
            history.push("/signIn/");
        } catch (error) {
            alert("注册失败！");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <UserLayout>
            <div>
                <h1 className={styles['register__title']} >Register</h1>
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

                    <Form.Item
                        label="Confirm Password"
                        name="confirm"
                        hasFeedback
                        rules={[
                            { required: true, message: "Please input your confirm password!" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("密码确认不一致！");
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" className={styles['button-primary']} >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </UserLayout>
    );
};

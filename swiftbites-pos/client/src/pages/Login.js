import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (value) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const res = await axios.post("/api/users/login", value);
      dispatch({ type: "HIDE_LOADING" });
      message.success("user login Succesfully");
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      dispatch({ type: "HIDE_LOADING" });
      message.error("Something Went Wrong");
      console.log(error);
    }
  };

  //currently login  user
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      localStorage.getItem("auth");
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register">
        <div className="regsiter-form">
          <h1>SwiftBites POS</h1>
          <h3>Login to continue</h3>
          <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email ID" }]}>
            <Input placeholder="Enter your email ID" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password" }]}>
            <Input placeholder="Enter your password" />
            </Form.Item>

            <div className="d-flex justify-content-between">
              <p>
                Not a user?
                <Link to="/register"> Register Here !</Link>
              </p>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;


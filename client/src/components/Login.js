import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import icon from "../images/icon.png";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../features/users/userSlice"; // Make sure to import your login action

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email should be valid")
    .required("Yêu cầu nhập Email"),
  password: Yup.string().required(
    "Yêu cầu nhập mật khẩu"
  ),
});

export default function Login({
  handleMenuClick,
}) {
  const dispatch = useDispatch();
  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // console.log(values);
        dispatch(login(values));
        formik.resetForm();
      } catch (error) {
        console.error(
          "Login failed",
          error
        );
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}>
            <img
              src={icon}
              width={70}
              alt="Icon"
            />
          </div>
          <span className="text-center fs-2 fw-bold mt-2">
            Đăng nhập tài khoản
          </span>
          <p className="text-center">
            Chưa có tài khoản?{" "}
            <span
              style={{
                color: "red",
                cursor: "pointer",
              }}
              onClick={() =>
                handleMenuClick(
                  "register"
                )
              }>
              Đăng ký
            </span>
          </p>
        </div>
        <div className="form-group">
          <Input
            name="email"
            className="p-3 mb-3"
            placeholder="Email"
            value={formik.values.email}
            onChange={
              formik.handleChange
            }
            onBlur={formik.handleBlur}
            disabled={isSubmitting}
          />
          {formik.errors.email &&
            formik.touched.email && (
              <div className="text-danger">
                {formik.errors.email}
              </div>
            )}
        </div>
        <div className="form-group">
          <Input.Password
            name="password"
            className="p-3 mb-3"
            placeholder="Password"
            value={
              formik.values.password
            }
            onChange={
              formik.handleChange
            }
            onBlur={formik.handleBlur}
            disabled={isSubmitting}
          />
          {formik.errors.password &&
            formik.touched.password && (
              <div className="text-danger">
                {formik.errors.password}
              </div>
            )}
        </div>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%" }}
          className="p-4"
          disabled={isSubmitting}>
          {isSubmitting
            ? "Đang đăng nhập..."
            : "Đăng nhập"}
        </Button>
      </form>
    </>
  );
}

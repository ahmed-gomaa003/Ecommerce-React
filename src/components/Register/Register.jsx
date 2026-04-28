import { ErrorMessage, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const navigate = useNavigate();
  const [error, setErrorMssg] = useState(null);
  const [isSuccess, setSuccess] = useState(false);

  async function registerUser(values) {
    console.log("🔥 SUBMIT TRIGGERED", values);
    try {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
        rePassword: values.rePassword,
        phone: values.phone,
      };
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        payload,
      );
      console.log(`Success : ${data}`);
      setSuccess(true);
      setErrorMssg(null);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.log("ERROR:", err.response?.data);
      setErrorMssg(err.response?.data);
    }
  }
  let user = {
    name: "AhmedAbdAlMuti",
    email: "ahmedmuttii4012@gmail.com",
    password: "Qwerty5090#",
    rePassword: "Qwerty5090#",
    phone: "",
  };
  const registerFormik = useFormik({
    initialValues: user,
    onSubmit: registerUser,
    //     validate: (data) => {
    //       const errors = {};

    //       const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    //       const phoneRegex = /^\+?[0-9]{10,15}$/;
    //       const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //       const passRegex =
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    //       if (!nameRegex.test(data.name)) {
    //         errors.name = "name must be /^[A-Za-z]+(?: [A-Za-z]+)*$/ ";
    //       }
    //       if (!nameRegex.test(data.)) {
    //         errors. = " must be /^[A-Za-z]+(?: [A-Za-z]+)*$/ ";
    //       }
    //       if (!phoneRegex.test(data.phone)) {
    //         errors.phone = "phone must be ";
    //       }
    //       if (!data.email) {
    //         errors.email = "Email is required";
    //       } else if (!mailRegex.test(data.email)) {
    //         errors.email = "Invalid email";
    //       }
    //       if (!passRegex.test(data.password)) {
    //         errors.password = "Min 8 chars, upper, lower, number, special char ";
    //         console.log("password:", data.password);
    //         console.log("isValid:", passRegex.test(data.password));
    //       }
    //       if (data.password !== data.rePassword) {
    //         errors.rePassword = "confirmed pass must be same";
    //       }
    //       console.log(errors);
    //       return errors;
    //     },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Invalid name")
        .required(" name is required"),

      email: Yup.string().email("Invalid email").required("Email is required"),

      phone: Yup.string()
        .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number")
        .required("Phone is required"),

      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
          "Weak password",
        )
        .required("Password is required"),

      rePassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
    }),
  });

  return (
    <div className="register-page">
      <div className="register-container">
        {isSuccess ? (
          <div className="register-success" role="alert">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                fill="currentColor"
              />
            </svg>
            Congratulations! Your account has been created successfully.
          </div>
        ) : null}
        {error ? (
          <div className="register-error" role="alert">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM7 11H9V7H7V11ZM7 5H9V3H7V5Z"
                fill="currentColor"
              />
            </svg>
            {error.message}
          </div>
        ) : null}
        <div className="register-card">
          <div className="register-header">
            <h2 className="register-title">Create Account</h2>
            <p className="register-subtitle">Join us today</p>
          </div>

          <form
            className="register-form"
            onSubmit={registerFormik.handleSubmit}
          >
            <div className="form-field">
              <input
                onBlur={registerFormik.handleBlur}
                type="text"
                name="name"
                id="name"
                value={registerFormik.values.name}
                onChange={registerFormik.handleChange}
                className="register-input"
                placeholder="Name"
                required
              />
              <label htmlFor="name" className="register-label">
                Name
              </label>
              {registerFormik.errors.name && registerFormik.touched.name ? (
                <div className="register-error" role="alert">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM7 11H9V7H7V11ZM7 5H9V3H7V5Z"
                      fill="currentColor"
                    />
                  </svg>
                  {registerFormik.errors.name}
                </div>
              ) : null}
            </div>

            <div className="form-field">
              <input
                onBlur={registerFormik.handleBlur}
                value={registerFormik.values.email}
                onChange={registerFormik.handleChange}
                type="email"
                name="email"
                id="email"
                className="register-input"
                placeholder="Email"
                required
              />
              <label htmlFor="email" className="register-label">
                Email Address
              </label>
              {registerFormik.errors.email && registerFormik.touched.email ? (
                <div className="register-error" role="alert">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM7 11H9V7H7V11ZM7 5H9V3H7V5Z"
                      fill="currentColor"
                    />
                  </svg>
                  {registerFormik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="form-row">
              <div className="form-field">
                <input
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.password}
                  onChange={registerFormik.handleChange}
                  type="password"
                  name="password"
                  id="password"
                  className="register-input"
                  placeholder="Password"
                  required
                />
                <label htmlFor="password" className="register-label">
                  Password
                </label>
                {registerFormik.errors.password &&
                registerFormik.touched.password ? (
                  <div className="register-error" role="alert">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM7 11H9V7H7V11ZM7 5H9V3H7V5Z"
                        fill="currentColor"
                      />
                    </svg>
                    {registerFormik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="form-field">
                <input
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.rePassword}
                  onChange={registerFormik.handleChange}
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  className="register-input"
                  placeholder="Confirm"
                  required
                />
                <label htmlFor="rePassword" className="register-label">
                  Confirm Password
                </label>
                {registerFormik.errors.rePassword &&
                registerFormik.touched.rePassword ? (
                  <div className="register-error" role="alert">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM7 11H9V7H7V11ZM7 5H9V3H7V5Z"
                        fill="currentColor"
                      />
                    </svg>
                    {registerFormik.errors.rePassword}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="form-field">
              <input
                onBlur={registerFormik.handleBlur}
                value={registerFormik.values.phone}
                onChange={registerFormik.handleChange}
                type="tel"
                name="phone"
                id="phone"
                className="register-input"
                placeholder="Phone"
                required
              />
              <label htmlFor="phone" className="register-label">
                Phone Number
              </label>
              {registerFormik.errors.phone && registerFormik.touched.phone ? (
                <div className="register-error" role="alert">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM7 11H9V7H7V11ZM7 5H9V3H7V5Z"
                      fill="currentColor"
                    />
                  </svg>
                  {registerFormik.errors.phone}
                </div>
              ) : null}
            </div>

            <button type="submit" className="register-button">
              Create Account
            </button>

            <p className="register-footer">
              Already have an account?{" "}
              <a href="#" className="register-link">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
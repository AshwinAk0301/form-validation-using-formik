import React from "react";
import { Component } from "react";
import { ErrorMessage, Formik, useFormik, yupToFormErrors } from "formik";
import "./App.css";
 
import * as yup from "yup";
import "yup-phone-lite";
import login from "./login";


// using formik, yup-phone-lite and yup node package.

const RegisterationPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      gender: "",
      password: "",
      confirmPassword: "",
    },


    
    // Here We use validationSchema from yup
    // package to avoid so much of else if usage
    // validate,

    // validationSchema

    validationSchema: yup.object({
      name: yup.string()
        .required("Name is required")
        .min(5, "Minimum 5 Characters is required ")
        .max(15, "Maximum 15 Characters only allowed"),

      email: yup.string()
      .email()
      .required("Email is required"),

      mobile:yup.string()
      .phone("IND", "Please enter a valid phone number")
      
      .required("This field is Required"),

      gender: yup.string().required("Field is required"),

      password: yup.string().required("Password is required"),

      confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required("confirmPassword is required"),
    }),

    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });



  // return statements

  return (
    <div className="form__box">
      <div>
        <h1>
          <span>
            <b>Form validation using hooks</b>
          </span>
        </h1>
        <h3> using formik and yup node package </h3>
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="Form_body"
        >
          <div className="form-group">
            <label> Name : </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              style={{ width: "370px" }}
              onChange={formik.handleChange}
            />

            {/* {formik.errors.name ? (
              <div className="text-danger">{formik.errors.name} </div>
            ) : null} */}
          </div>

          <div className="form-group">
            <label> Email : </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              style={{ width: "370px" }}
              onChange={formik.handleChange}
            />

            {/* {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email} </div>
            ) : null} */}
          </div>
          

          <div className="form-group">
            <label> Contact Number : </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="mobile"
              placeholder="Contact Number"
              value={formik.values.mobile}
              style={{ width: "370px" }}
              onChange={formik.handleChange}
            />

            {/* {formik.errors.mobile ? (
              <div className="text-danger">{formik.errors.mobile} </div>
            ) : null} */}
          </div>

          <div className="form-group ">
            <label>Select Gender :</label>
            <br />
            <select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="form-group"
              id="sell"
            >
              <option value="">--Select One--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label> Password : </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              style={{ width: "370px" }}
              onChange={formik.handleChange}
            />

            {/* {formik.errors.password ? (
              <div className="text-danger">{formik.errors.password} </div>
            ) : null} */}
          </div>

          <div className="form-group">
            <label> Confirm Password : </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              style={{ width: "370px" }}
              onChange={formik.handleChange}
            />

            {formik.errors.confirmPassword ? (
              <div className="text-danger">
                {formik.errors.confirmPassword}{" "}
              </div>
            ) : null}
          </div>
          <br />

          <button type="submit" className="btn btn-primary" >       
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterationPage;

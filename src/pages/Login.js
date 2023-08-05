import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let schema = Yup.object().shape({
    email: Yup.string().email("El email debe ser valido").required("El email es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
   
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password:"",
    },
    validationSchema:schema,
    onSubmit: values => {
      dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });
  const authState = useSelector((state)=>state);
  const { user, isError, isSuccess,isLoading, message}= authState.auth;
  
  useEffect(()=>{
    if(isSuccess){
      navigate("admin");
    }
    else{
      alert("no");
    }
  },[user, isError, isSuccess,isLoading]);
    return (
        <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
            <h3 className="text-center title">Login</h3>
            <p className="text-center">Logeate con tu cuenta para continuar.</p>
            <div className="error text-center">
              {message.message == "Rechazado"? "No eres un administrador": ""}
            </div>
            <form action="" onSubmit={formik.handleSubmit}> 
              <CustomInput
                type="text"
                name="email"
                label="Email Address"
                id="email"
                val={formik.values.email}
                onCh={formik.handleChange("email")}
              />
               <div className="error">
                {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
                ) : null}
               </div>
              <CustomInput
                type="password"
                name="password"
                label="Password"
                id="pass"
                val={formik.values.password}
                onCh={formik.handleChange("password")}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
                ) : null}
              </div>
            <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
            </div>
              <button
                className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
                style={{ background: "#ffd333" }}
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }
export default Login;
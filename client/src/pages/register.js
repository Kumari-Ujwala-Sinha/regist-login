import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";

const Register = () => {
  const initialState = {
    email: "",
    password: "",
    firstname: "",
    lastname:"",
    mobile:"",
    address:"",
    username: "",
    cf_password: "",
    gender: "female",
  };
  const [userData, setUserData] = useState(initialState);
  const [typePass, setTypePass] = useState(true);
  const [typeCfPass, setTypeCfPass] = useState(true);
  const { email, password, firstname, lastname, address, mobile, username, cf_password, gender } = userData;
  const { auth, alert } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData))
  };
  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit} className="register">
        <h3 className="text-uppercase text-center mb-4">U-Social-Network</h3>
        <div className="form-group">
          <label htmlFor="fullname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            onChange={handleChangeInput}
            value={firstname}
            name="firstname"
            style={{background:`${alert.fullname ? "#fd2d6a14" : ""}`}}
          />
          <small id="emailHelp" className="form-text text-danger">
            {alert.firstname ? alert.firstname : ""}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            onChange={handleChangeInput}
            value={lastname}
            name="lastname"
            style={{background:`${alert.fullname ? "#fd2d6a14" : ""}`}}
          />
         
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleChangeInput}
            value={username.toLowerCase().replace(/ /g,'')}
            style={{background:`${alert.username ? "#fd2d6a14" : ""}`}}
            name="username"
          />
          <small id="emailHelp" className="form-text text-danger">
          {alert.username ? alert.username : ""}
          </small>
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
       
            onChange={handleChangeInput}
            style={{background:`${alert.email ? "#fd2d6a14" : ""}`}}
            value={email}
            name="email"
          />
          <small id="emailHelp" className="form-text text-danger">
          {alert.email ? alert.email : "We'll never share your email with anyone else."}
            
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Phone No.</label>
          <input
            type="Number"
            className="form-control"
            id="mobile"
            onChange={handleChangeInput}
            value={mobile}
            name="mobile"
           
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            
            className="form-control"
            id="address"
            onChange={handleChangeInput}
            value={address}
            name="address"
            style={{background:`${alert.fullname ? "#fd2d6a14" : ""}`}}
          />
          
  </div>
        

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <div className="pass">
            <input
              type={typePass ? "password" : "text"}
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChangeInput}
              value={password}
              style={{background:`${alert.password ? "#fd2d6a14" : ""}`}}
              name="password"
            />
            <small
              onClick={() => {
                setTypePass(!typePass);
              }}
            >
              {typePass ? "Show" : "Hide"}
            </small>
            </div>
            <small id="passwordHelp" className="form-text text-danger">
          {alert.password ? alert.password : ""}
            
          </small>
         
          <div className="form-group">
            <label htmlFor="cf_password">Confirm Password</label>
            <div className="pass">
              <input
                type={typeCfPass ? "password" : "text"}
                className="form-control"
                id="cf_password"
                onChange={handleChangeInput}
                value={cf_password}
                name="cf_password"
                style={{background:`${alert.cf_password ? "#fd2d6a14" : ""}`}}
              />
              <small
                onClick={() => {
                  setTypeCfPass(!typeCfPass);
                }}
              >
                {typeCfPass ? "Show" : "Hide"}
              </small>
              </div>
              <small id="cfpasswordHelp" className="form-text text-danger">
          {alert.cf_password ? alert.cf_password : ""}
            
          </small>
            
          </div>
        </div>
        <div className="row justify-content-between mb-1 mx-0">
            <label htmlFor="male">
                Male:<input type="radio" value="male" id="male" name={gender} onChange={handleChangeInput}/>
            </label>
            <label htmlFor="female">
                Female:<input type="radio" value="female" id="female" defaultChecked name={gender} onChange={handleChangeInput}/>
            </label>
            <label htmlFor="others">
                Others:<input type="radio" value="others" id="others" name={gender} onChange={handleChangeInput}/>
            </label>
        </div>

        <button
          type="submit"
          className="btn btn-dark w-100 text-uppercase"
         
        >
          Register
        </button>
        <p className="my-2">
          Already have an account?{" "}
          <Link to="/login" style={{ color: "crimson" }}>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

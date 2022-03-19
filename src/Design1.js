import React, { useState } from "react";

export default function Design1({singIn}) {
  const [userName, setUserName] = useState("");
  const login = (event) => {
    event.preventDefault();
    singIn(userName)
  };
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Hello, User!</h1>
        <p className="lead">We are happy to serve you</p>
        <hr className="my-4" />
        <p>Please Login to continue</p>
      </div>
      <form className="col-md-5 text-center">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button className="btn btn-md btn-primary" type="submit" onClick={login}>
          Login
        </button>
      </form>
    </>
  );
}

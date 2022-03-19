import React from "react";

export default function Design2({name ,signOut}) {
    const logout = ()=>{
        signOut('logout')
    }
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Hello, {name}!</h1>
        <p className="lead">You are logged in</p>
        <hr className="my-4" />
        <p>You can use our services</p>
      </div>
      <button className="btn btn-md btn-danger" type="submit" onClick={logout}>
          Logout
        </button>
    </>
  );
}

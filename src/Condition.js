import React, { useState } from "react";
import Design1 from "./Design1";
import Design2 from "./Design2";

export default function Condition() {
  const [isLoggedIn, setLogin] = useState(false);
  const [loggedInUserName, setLoggedinUserName] = useState("");
  const userLogin = (data) => {
    if(data !== '' && data.length >= 3){
        setLoggedinUserName(data)
        setLogin(true)
    }
  };

  const UserLogout = (data)=>{
    setLogin(false);
    setLoggedinUserName('')
  }
  return <div>{isLoggedIn ? <Design2 name={loggedInUserName} signOut={UserLogout} /> : <Design1 singIn={userLogin} />}</div>;
}

import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  let fbContent;

  const componentClicked = () => {
    console.log("clicked");
  };

  const responseFacebook = (res) => console.log(res);

  if (isLoggedIn) {
    fbContent = null;
  } else {
    fbContent = (
      <FacebookLogin
        appId="1547678445648403"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return <div>{fbContent}</div>;
};

export default Facebook;

// import authication and history
import React, { Component } from "react";
import auth0 from "auth0-js";
import { Redirect } from "react-router-dom";
import API from "../../utils/api";

// create Authentication component
class Auth extends Component {
    
    auth0 = new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN || "app78488740.auth0.com",
      clientID:  process.env.AUTH0_CLIENT_ID || "doh0u_68zAATE2KyI1th-O1h8YnndJEO",
      redirectUri: process.env.AUTH0_CALLBACK_URL || "http:localhost:3000/profile",
      audience: 'https://app78488740.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });

    login = () => {
      this.auth0.authorize();
    }

    logout = () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      // navigate to home route

    }

    handleAuthentication = (cb) => {

      this.auth0.parseHash((err, authRes) => {
        if(authRes && authRes.accessToken && authRes.idToken){
          // grab auth0 idToken
          let auth0Token = authRes.idTokenPayload.sub;
          // split token and grab only the id 
          let auth0Id = auth0Token.split("|")[1];
          // check id agaisnt database as a key value
          API.user.findOne(auth0Id)
            .then(user => {
              cb(user, auth0Id)
            })
            .catch(err => console.log(err))
        }else if(err){
          console.log(err)
        };
      });
    };

    setSession = (authRes) => {
      // Set the time that access token will expire at
      localStorage.setItem("access_token", authRes.accessToken);
      localStorage.setItem("id_token", authRes.idToken);
    }
};

export default new Auth();
// import authication and history
import auth0 from "auth0-js";
import history from "./history";



export default class Auth {
    
    auth0 = new auth0.WebAuth({
      domain: "app78488740.auth0.com",
      clientID:  "doh0u_68zAATE2KyI1th-O1h8YnndJEO",
      redirectUri: "http:localhost:3000/build",
      audience: 'https://app78488740.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });
    
    componentDidMount(){
      console.log(this.auth0)
    }
  

    login = () => {
      this.auth0.authorize(res => console.log(res));
    }

    handleAuthentication = () => {
      this.auth0.parseHash((err, authRes) => {
        if(authRes && authRes.accessToken && authRes.idToken){
          this.setSession(authRes);
          history.replace("/build")
        }else if(err){
          history.replace("/");
          console.log(err)
        };
      });
    };

    setSession = (authRes) => {
      // Set the time that access token will expire at
      localStorage.setItem("access_token", authRes.accessToken);
      localStorage.setItem("id_token", authRes.idToken);
      // navigate to build page
      history.replace("/home");
    }
};
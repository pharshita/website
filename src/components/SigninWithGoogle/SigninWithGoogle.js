// import React, { useState } from 'react';
// import { GoogleLogin,GoogleLogout} from 'react-google-login';
// const clientId = '374179871735-dj9ev905d5u7lcf02k2rq8v0bnflp769.apps.googleusercontent.com';

// const SigninWithGoogle = () => {
//   const onSuccess = (res) => {
//     console.log('[Login Success]:', res.profileObj);
//   };

//   const onFailure = (res) => {
//     console.log('[Login failed]', res);
//   };
//   const logout = () => {
//     console.log("logout");
//   };

//   return (
//     <div>
//       <GoogleLogin
//         clientId={clientId}
//         button Text="Login with Google"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiepolicy={'double_host_origin'}
//         isSignedIn={true} />

    
//     </div>
//   );

// }

// export default SigninWithGoogle;


import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script"; 

export default function SigninWithGoogle() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const responseGoogle = ((response) => {

    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoginStatus(true);
  });
  const logout = () => {
    console.log("logout");
    setLoginStatus(false);
  };
  useEffect(()=>{
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
          clientId: '374179871735-dj9ev905d5u7lcf02k2rq8v0bnflp769.apps.googleusercontent.com',
          plugin_name: "chat"
      })
})
  })
  return (
    <div className="App">
      <h1>Login with Google</h1>
      {!loginStatus && (
        <GoogleLogin
          clientId="374179871735-dj9ev905d5u7lcf02k2rq8v0bnflp769.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {loginStatus && (
        <div>
          <h2>Welcome {name}</h2>
          <h2>Email: {email}</h2>
          <img src={url} alt={name} />
          <br />
          <GoogleLogout
            clientId="374179871735-dj9ev905d5u7lcf02k2rq8v0bnflp769.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  );
}
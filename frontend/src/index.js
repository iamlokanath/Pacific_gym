import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import { Amplify } from "aws-amplify";
import App from './App';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: "us-east-1",
        userPoolId: "us-east-1_iNyx7nwfi",
        identityPoolId: "us-east-1:7a5953dd-90cb-48d3-ac4e-143bf98b0860",
        userPoolWebClientId: "59looalhm8vm9t95eigt8msvpr",
        // oauth: {
        //     domain: `${"gymnaism-harsh-auth-domain.auth.us-east-1.amazoncognito.com"}`,
        //     scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
        //     redirectSignIn: "http://localhost:3000",
        //     redirectSignOut: "http://localhost:3000",
        //     responseType: "token",
        // },
    },
    API: {
        endpoints: [
            {
                name: "UserApi",
                endpoint: "https://nwngtgdvol.execute-api.us-east-1.amazonaws.com",
                region: "ap-south-1",
            },
        ]
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Router>
    <App />
    // </Router>
);

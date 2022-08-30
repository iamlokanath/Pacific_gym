import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Amplify } from "aws-amplify"; 
import App from './App';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: "us-east-1",
        userPoolId: "us-east-1_0cjDyS2jJ",
        identityPoolId: "us-east-1:1c6c3156-94ad-47c4-b3f5-59b2c7da1a81",
        userPoolWebClientId: "29eskqsl1sliu28fjdo6852hqb",
        oauth: {
            domain: `${"gymnaism-harsh-auth-domain.auth.us-east-1.amazoncognito.com"}`,
            scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
            redirectSignIn: "http://localhost:3000",
            redirectSignOut: "http://localhost:3000",
            responseType: "token",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import { Amplify } from "aws-amplify";
import App from './App';
import config from './config';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID,
        // oauth: {
        //     domain: `${"gymnaism-harsh-auth-domain.auth.us-east-1.amazoncognito.com"}`,
        //     scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
        //     redirectSignIn: "http://localhost:3000",
        //     redirectSignOut: "http://localhost:3000",
        //     responseType: "token",
        // },
    },
    Storage:{
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID        
    },
    API: {
        endpoints: [
            {
                name: "Pacific",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION,
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

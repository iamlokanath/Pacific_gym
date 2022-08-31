import * as iam from "aws-cdk-lib/aws-iam";
import * as cognito from "aws-cdk-lib/aws-cognito";
import { Auth, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";
import { ApiStack } from "./ApiStack";

export function AuthStack({ stack, app }) {
  const { bucket } = use(StorageStack);
  const { api } = use(ApiStack);

  const auth = new Auth(stack, "Auth", {
    login: ["email"],
    // identityPoolFederation: {
    //   facebook: { appId: "461607889252178" },
    //   google: {
    //     clientId:
    //       "754590198923-416t8hs42pid58s79v6lnn806vgohqiu.apps.googleusercontent.com",
    //   },
    // },
    // cdk: {
    //   userPoolClient: {
    //     supportedIdentityProviders: [
    //       cognito.UserPoolClientIdentityProvider.GOOGLE,
    //       cognito.UserPoolClientIdentityProvider.FACEBOOK,
    //     ],
    //     oAuth: {
    //       callbackUrls: ["http://localhost:3000"],
    //       logoutUrls: ["http://localhost:3000"],
    //     },
    //   },
    // },
  });

  auth.attachPermissionsForAuthUsers(stack, [
    api,
    new iam.PolicyStatement({
      actions: [
        "s3:*",
        "ses:SendEmail",
        "dynamodb:Query",
        "dynamodb:UpdateItem"
      ],
      effect: iam.Effect.ALLOW,
      resources: [
        bucket.bucketArn + "/private/${cognito-identity.amazonaws.com:sub}/*",
      ],
    }),
  ]);

  // // Throw error if client ID & secret are not provided
  // if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET)
  // throw new Error("Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET");
  // if (!process.env.FACEBOOK_APP_ID || !process.env.FACEBOOK_APP_SECRET)
  //   throw new Error("Please set FACEBOOK_APP_ID and FACEBOOK_APP_SECRET");

  // // Create a Google OAuth provider
  // const provider = new cognito.UserPoolIdentityProviderGoogle(stack, "Google", {
  // clientId: process.env.GOOGLE_CLIENT_ID,
  // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // userPool: auth.cdk.userPool,
  // scopes: ["profile", "email", "openid"],
  // attributeMapping: {
  //   email: cognito.ProviderAttribute.GOOGLE_EMAIL,
  //   givenName: cognito.ProviderAttribute.GOOGLE_GIVEN_NAME,
  //   familyName: cognito.ProviderAttribute.GOOGLE_FAMILY_NAME,
  //   profilePicture: cognito.ProviderAttribute.GOOGLE_PICTURE,
  // },
  // });
  // const providerfb = new cognito.UserPoolIdentityProviderFacebook(
  //   stack,
  //   "Facebook",
  //   {
  //     clientId: process.env.FACEBOOK_APP_ID,
  //     clientSecret: process.env.FACEBOOK_APP_SECRET,
  //     userPool: auth.cdk.userPool,
  //     attributeMapping: {
  //       email: cognito.ProviderAttribute.FACEBOOK_EMAIL,
  //       givenName: cognito.ProviderAttribute.FACEBOOK_NAME,
  //     },
  //   }
  // );

  // // attach the created provider to our userpool
  // auth.cdk.userPoolClient.node.addDependency(provider);
  // auth.cdk.userPoolClient.node.addDependency(providerfb);

  stack.addOutputs({
    ApiEndpoint: api.url,
    Region: app.region,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });

  return {
    auth,
  };
}
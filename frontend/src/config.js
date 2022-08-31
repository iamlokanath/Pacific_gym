const config = {
    // Backend config
    s3: {
      REGION: "us-east-1",
      BUCKET: "lokanath-pacific-storagesta-uploadsbucketc4b27cc7-664iei3r743g",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://e5cqyzaooj.execute-api.us-east-1.amazonaws.com",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_ycQ8754fX",
      APP_CLIENT_ID: "a1t17qpssiobh1tav6q033tjg",
      IDENTITY_POOL_ID:"us-east-1:dbbc4faf-10ee-453d-a76f-f2c589bbbca1",
    },
  };
  
  export default config;

// {"email":"lokanathpanda128@gmail.com","firstName":"Lokanath","lastName":"Panda","phone":"8144496407"}

// npx aws-api-gateway-cli-test --username='lokanathpanda128@gmail.com' --password='Panda@123' --user-pool-id='us-east-1_ycQ8754fX' --app-client-id='a1t17qpssiobh1tav6q033tjg' --cognito-region='us-east-1' --identity-pool-id='us-east-1:dbbc4faf-10ee-453d-a76f-f2c589bbbca1' --invoke-url='https://e5cqyzaooj.execute-api.us-east-1.amazonaws.com' --api-gateway-region='us-east-1' --path-template='/UserData' --method='POST' --body='{\"email\":\"lokanathpanda128@gmail.com\",\"firstName\":\"Lokanath\",\"lastName\":\"Panda\",\"phone\":\"8144496407\"}'


// npx aws-api-gateway-cli-test --username='lokanathpanda128@gmail.com' --password='Panda@123' --user-pool-id='us-east-1_iNyx7nwfi' --app-client-id='59looalhm8vm9t95eigt8msvpr' --cognito-region='us-east-1' --identity-pool-id='us-east-1:7a5953dd-90cb-48d3-ac4e-143bf98b0860' --invoke-url='https://nwngtgdvol.execute-api.us-east-1.amazonaws.com' --api-gateway-region='us-east-1' --path-template='/UserData' --method='POST' --body='{\"emailId\":\"lokanathpanda128@gmail.com\",\"firstName\":\"Lokanath\",\"lastName\":\"Panda\",\"phone\":\"8144496407\"}'
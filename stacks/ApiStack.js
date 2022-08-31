import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
  const { table } = use(StorageStack);

  const api = new Api(stack, "Api", {
    defaults: {
        authorizer: "iam",
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
        },
      },
    },
    
    routes: {
      "POST /UserData": "functions/create.main",
      "GET /UserData/{id}": "functions/get.main",
      "GET /UserData": "functions/list.main",
      "PUT /UserData/{id}": "functions/update.main",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };
}

// npx aws-api-gateway-cli-test --username='tanmaypanda752@gmail.com' --password='Tanmay@123' --user-pool-id='us-east-1_LYnaeITud' --app-client-id='2fdnhtmn7h7jk3r8ja9ga6ib8j' --cognito-region='us-east-1' --identity-pool-id='us-east-1:3b11f6f8-d55f-4ee1-89f1-9c0d0b422778' --invoke-url='https://3vd1kvphr6.execute-api.us-east-1.amazonaws.com' --api-gateway-region='us-east-1' --path-template='/UserData' --method='POST' --body='{\"userName\":\"Tanmay_Kumar_Panda\",\"email\":\"tanmaypanda752@gmail.com\",\"address\":\"Soro,Balasore,Odisha,India\",\"phone\":\"7008651763\"}'

// npx aws-api-gateway-cli-test --username='iamunstoppableguy@gmail.com' --password='Tanmay@123' --user-pool-id='us-east-1_LYnaeITud' --app-client-id='7vv3l0v037ln46i5a9sf55r2vj' --cognito-region='us-east-1' --identity-pool-id='us-east-1:3b11f6f8-d55f-4ee1-89f1-9c0d0b422778' --invoke-url='https://3vd1kvphr6.execute-api.us-east-1.amazonaws.com' --api-gateway-region='us-east-1' --path-template='/UserData' --method='POST' --body='{\"userName\":\"Unstoppable Guy\",\"email\":\"iamunstoppableguy@gmail.com\",\"address\":\"Delhi,Delhi,Inia,Asia\",\"phone\":\"9937864784\"}'

// npx aws-api-gateway-cli-test --username='tanmaypanda752@gmail.com' --password='Tanmay@123' --user-pool-id='us-east-1_LYnaeITud' --app-client-id='2fdnhtmn7h7jk3r8ja9ga6ib8j' --cognito-region='us-east-1' --identity-pool-id='us-east-1:3b11f6f8-d55f-4ee1-89f1-9c0d0b422778' --invoke-url='https://3vd1kvphr6.execute-api.us-east-1.amazonaws.com' --api-gateway-region='us-east-1' --path-template='/UserData' --method='GET' 


// {
//   "noteId": "9bf1ab51-94c8-48cd-b0ef-c47efb3a5864",
//   "userId": "us-east-1:0a719458-6716-4b19-9ea5-f4c3b393b7f4",
//   "userName": "Tanmay_Kumar_Panda",
//   "address": "Soro,Balasore,Odisha,India",
//   "email": "tanmaypanda752@gmail.com",
//   "phone": "dsfg"
// }
// tanmay
// {"userId":"tanmayjk","commonId":"123","userName":"Tanmay_Kumar_panda","email":"tanmaypanda752@gmail.com","address":"Soro,Balasore,Odisha,India","phone":"7008651763"}
// {"userName":"Tanmay_Kumar_panda","email":"tanmaypanda752@gmail.com"}
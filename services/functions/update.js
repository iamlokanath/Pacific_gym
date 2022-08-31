import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
        userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
    },
    UpdateExpression: "SET firstName = :firstName , lastName = :lastName , email = :email , phone = :phone",
    ExpressionAttributeValues: {
      ":email": data.email || null,
      ":firstName": data.firstName || null,
      ":lastName": data.lastName || null,
      ":phone": data.phone || null,
    },
    ReturnValues: "ALL_NEW",
  };

  await dynamoDb.update(params);

  return { status: true };
});
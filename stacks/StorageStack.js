import { Bucket, Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  
  const bucket = new Bucket(stack, "Uploads", {
    cors: [
      {
        maxAge: "1 day",
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      },
    ],
  });
  
  const table = new Table(stack, "UserData", {
    fields: {
      userId: "string",
      commonId: "string",
    },
    primaryIndex: { partitionKey: "userId",sortKey: "commonId"},
  });

  return {
    table,
    bucket,
  };
}
import { Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {

    const UserTable = new Table(stack, "UserTable", {
        fields: {
            userId: "string",
        },
        primaryIndex: { partitionKey: "userId" },
    })

    stack.addOutputs({
        TableName: UserTable.tableName
    })

    return { UserTable }
}
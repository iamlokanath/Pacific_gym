import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
    const {
        UserTable,
    } = use(StorageStack);

    const userApi = new Api(stack, "UserApi", {
        cors: {
            maxAge: "2 days",
            allowHeaders: ["*"],
            allowOrigins: ["*"],
            allowMethods: ["ANY"],
        },
        defaults: {
            authorizer: "iam",
            function: {
                permissions: [
                    UserTable,
                ],
            },
        },
        routes: {
            //user data
            "POST /userdata": "functions/userdata/create.main",
            "GET /userdata": "functions/userdata/get.main",
            "PUT /userdata/basic": "functions/userdata/updatebasicuserdata.main",
        },
    });

    stack.addOutputs({
        UserApiEndpoint: userApi.url,
    });

    return {
        userApi,
    };
}
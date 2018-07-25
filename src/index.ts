import "reflect-metadata";
import { ApiServer } from "./server";
import { DatabaseProvider } from "./server/database";

DatabaseProvider.configure({
    database: "user_db",
    host: "192.168.99.100",
    password: "nimda",
    port: 5432,
    ssl: false,
    type: "postgres",
    username: "admin",

});

const apiServer = new ApiServer();
apiServer.startServer(+process.env.PORT || 8080);

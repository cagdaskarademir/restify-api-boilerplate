import 'reflect-metadata';
import { ApiServer } from './server';
import { DatabaseProvider } from "./server/database";

DatabaseProvider.configure({
    type: "postgres",
    database: "user_db",
    username: "admin",
    password: "nimda",
    host: "192.168.99.100",
    port: 5432,
    ssl: false
});

const apiServer = new ApiServer();
apiServer.startServer(+process.env.PORT || 8080);
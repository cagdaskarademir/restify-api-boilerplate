import { Connection, createConnection } from "typeorm";
import { ContactModel } from "../models/contact.model";

export interface IDatabaseConfiguration {
    type: "postgres";
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    ssl?: boolean;
}

export class DatabaseProvider {
    private static connection: Connection;
    private static configuration: IDatabaseConfiguration;

    public static configure(config: IDatabaseConfiguration): void { // tslint:disable-line
        DatabaseProvider.configuration = config;
    }

    public static async getConnection(): Promise<Connection> { // tslint:disable-line
        if (DatabaseProvider.connection) {
            return DatabaseProvider.connection;
        }

        const { type, host, port, username, password, database, ssl } = DatabaseProvider.configuration;

        DatabaseProvider.connection = await createConnection({
            type, host, port, username, password, database,
            extra: {
                ssl,
            },
            entities: [ContactModel],
            synchronize: true,
        });

        return DatabaseProvider.connection;
    }
}

import {user} from "./models/user";
import "reflect-metadata";
import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    entities: [user],
    migrations: [],
    subscribers: [],  
    }
)
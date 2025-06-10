import { error } from 'console';
import dotenv from 'dotenv';
import { Options, Sequelize } from 'sequelize';
import User from './User';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(<Options>{
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    dialect: 'postgres',
    database: DB_NAME,
    logging: false
});

let models = [User];

models.forEach((model) => model.initialize(sequelize));

const connectionDb = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('✅ DB connected successfully'); // ✅ Амжилттай холбогдсон лог

        await sequelize.sync({ alter: true, force: false });
        console.log('✅ DB sync complete'); // ✅ Sync хийгдсэнийг логлох
    } catch (err: any) {
        console.log('❌ DB connection error:', err.message);
    }
}

export {
    connectionDb,
    sequelize as Database,
    User as UserModel
}

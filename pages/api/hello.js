import { Sequelize } from "sequelize";

const credentials = {
    database: 'project_master',
    username: 'root',
    password: ''
}

const sequelize = new Sequelize(credentials.database, credentials.username, credentials.password, {
    host: 'localhost',
    dialect: 'mysql'
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const value = await sequelize.query(req.body.data);
            res.status(200).json(value[0])
        } catch (error) {
            res.status(200).json(error)
        }
    }
}
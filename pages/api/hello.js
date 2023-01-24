import { Sequelize } from "sequelize";
// Parameters are as follows: Database name, Username, Password
const sequelize = new Sequelize('tempdb', 'sa', '@x10m@t1C', {
    //Host machine to connect to
    host: 'localhost',
    //SQL dialect
    dialect: 'mssql'
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
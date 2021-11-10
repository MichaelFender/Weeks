require("dotenv").config();

const Sequelize = require("sequelize");

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

const userId = 4;
const clientId = 3;

module.exports = {
    getUserInfo: (req, res) => {
        sequelize
            .query(
                `
            select * from cc_clients c
            join cc_users u on c.user_id = u.user_id
            where u.user_id = ${userId};`
            )
            .then((dbRes) => res.status(200).send(dbRes[0]))
            .catch((err) => console.log(err));
    },
};

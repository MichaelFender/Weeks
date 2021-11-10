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

let nextEmp = 5

module.exports = {
    getUpcomingAppointments: (req, res) => {
        sequelize.query(`select a.appt_id, a.date, a.service_type, a.notes, u.first_name, u.last_name 
        from cc_appointments a
        join cc_users u on a.client_id = u.user_id
        WHERE a.approved = true AND a.completed = false
        order by a.date desc;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    approveAppointment: (req, res) => {
        let {apptId} = req.body
    
        sequelize.query(`*****YOUR CODE HERE*****
        
        insert into cc_emp_appts (emp_id, appt_id)
        values (${nextEmp}, ${apptId}),
        (${nextEmp + 1}, ${apptId});
        `)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
                nextEmp += 2
            })
            .catch(err => console.log(err))
    },
    getAllClients: (req, res) => {
        sequelize
            .query(
                `
            select * from cc_clients c
            join cc_users u on c.user_id = u.user_id`
            
            )
            .then((dbRes) => res.status(200).send(dbRes[0]))
            .catch((err) => console.log(err));
    },
    

    getPendingAppointments: (req, res) => {
        sequelize
        .query(`SELECT * FROM cc_appointments WHERE approved = false ORDER BY cc_appointments.date`)
        
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log('getPendingAppointments error', err))
    },
    getPastAppointments: (req, res) => {
        sequelize.query(`SELECT * FROM cc_appointments;`)  
        
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log('getPastAppointments error', err))
    },
}

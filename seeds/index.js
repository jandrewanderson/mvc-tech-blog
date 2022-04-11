const sequelize = require('../config/connection');
//require in all other js files here containing data

const seedAll = async () => {
    await sequelize.sync({ force: true });
    //call seeding functions from other js files in the seeds folder.
    //process.exit
    process.exit(0);
}

seedAll();
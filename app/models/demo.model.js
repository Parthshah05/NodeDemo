module.exports = (sequelize, Sequelize) => {
    const DemoTable = sequelize.define("demotable", {
        name: {
            type: Sequelize.STRING
        },
        hobby: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        age: {
            type:Sequelize.INTEGER
        },
        gender: {
            type:Sequelize.STRING
        },
        // image: {
        //     type:Sequelize.STRING
        // },
        dob: {
            type:Sequelize.DATE
        },

    });
    return DemoTable;
};
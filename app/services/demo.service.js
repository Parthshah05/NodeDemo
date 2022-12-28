const dbconnection = require('../config/db.config');


/* insert new Data  */
exports.createNewRecord = async (data) => {
    const connection = await dbconnection.getConnection();
    const res = await connection.request()
    .input("Name", data.Name)
    .input("Address", data.Address)
    .input("Mobile", data.Mobile)
    .input("Hobby", data.Hobby)
    .input("Email",data.Email)
    .input("password",data.password)
    .execute("RecordSave");
    return res;
};

/* User Login  */
exports.userLogin = async (data) => {
    const connection = await dbconnection.getConnection();
    const res = await connection.request()
    .input("Email",data.Email)
    .input("password",data.password)
    .execute("loginUser");
    return res.recordset;
};

/* Get All Records */
exports.getAllRecords = async (name) => {
    const connection = await dbconnection.getConnection();
    const res = await connection.request()
    .input("SearchData",name)
    .execute("getAllRecords");
    return res.recordset;
};

/* get Records by its id */
exports.getRecordById = async (demo_id) => {
    const connection = await dbconnection.getConnection();
    const res = await connection.request()
    .input("UserId", demo_id)
    .execute("GetUserRecordById");
    return res.recordset;
};

/* update record */
exports.updateRecord = async (demo_id, data) => {
    const connection = await dbconnection.getConnection();
    const res = await connection.request()
    .input("Id", demo_id)
    .input("Name", data.Name)
    .input("Address", data.Address)
    .input("Mobile",data.Mobile)
    .input("Hobby",data.Hobby)
    .execute("RecordSave");
    return res;
};

/* delete record */
exports.deleteRecord = async (demo_id) => {
    const connection = await dbconnection.getConnection();
   const res = await connection.request()
   .input("Id", demo_id)
   .execute("deleteRecord");
   return res;
};

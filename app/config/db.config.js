const mssql = require('mssql')

class DBConnection {
  async getConnection() {
    try {
      return await mssql.connect({
        server: '10.1.1.194',
        authentication: {
          type: 'default',
          options: {
            userName: 'sa',
            password: 'admin@123',
          },
        },
        options: {
          encrypt: false,
          database: 'Demo',
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = new DBConnection()

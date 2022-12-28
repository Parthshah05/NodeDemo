const demoService = require('../services/demo.service')
const constants = require('../common/constants.common')
const { successResponse, errorResponse } = require('../common/response.common')
var jwt = require('jsonwebtoken')

// Create and Save a new Demo Data
exports.create = async (req, res) => {
  try {
    let req_data = req.body
    await demoService.createNewRecord(req_data)
    res
      .status(200)
      .json(successResponse(constants.DEMO_CREATE_SUCCESS, req_data))
  } catch (err) {
    res.status(500).json(errorResponse(err.message))
  }
}

// Create and Save a new Demo Data
exports.login = async (req, res) => {
  try {
    let req_data = req.body
    let data = await demoService.userLogin(req_data)
    if (data[0]) {
      const token = jwt.sign({ Email: req_data.Email }, process.env.SECRET, {
        expiresIn: '24h',
      })
      res.cookie('token', token)
      const final = {
        token: token,
        email: data[0].Email,
        id: data[0].Id,
        name: data[0].Name,
        address: data[0].Address,
        mobile: data[0].Mobile,
        hobby: data[0].Hobby,
      }
      res.status(200).json(successResponse(constants.LOGIN_SUCCESS, final))
    } else {
      res.status(500).json(errorResponse(constants.LOGIN_FAIL))
    }
  } catch (err) {
    res.status(500).json(errorResponse(err.message))
  }
}

// Retrieve all Data from the database.
exports.getAll = async (req, res) => {
  try {
    let name = req.query.name
    let records = await demoService.getAllRecords(name)
    return res.status(200).json(successResponse(constants.DEMO_LIST, records))
  } catch (err) {
    res.status(500).json(errorResponse(err.message))
  }
}
// Find a single Data with an id
exports.getById = async (req, res) => {
  try {
    let data = await demoService.getRecordById(req.params.id)

    if (!data[0]) {
      return res.status(404).json(errorResponse(constants.DEMO_NOT_FOUND))
    }
    res.status(200).json(successResponse(constants.DEMO_BY_ID, data))
  } catch (err) {
    res.status(500).json(errorResponse(err.message))
  }
}
// Update a Demo Table by the id in the request
exports.update = async (req, res) => {
  try {
    let req_data = req.body
    let demo_id = req.params.id
    let updated_data
    let data = await demoService.getRecordById(demo_id)
    if (!data[0]) {
      return res.status(404).json(errorResponse(constants.DEMO_NOT_FOUND))
    }
    updated_data = await demoService.updateRecord(demo_id, req_data)
    if (updated_data) {
      return res
        .status(200)
        .json(successResponse(constants.DEMO_UPDATE_SUCCESS, req_data))
    }
  } catch (err) {
    res.status(500).json(errorResponse(err.message))
  }
}
// Delete a Record with the specified id in the request
exports.delete = async (req, res) => {
  try {
    let data = await demoService.getRecordById(req.params.id)
    console.log(data)
    if (!data[0]) {
      return res.status(404).json(errorResponse(constants.DEMO_NOT_FOUND))
    }
    await demoService.deleteRecord(req.params.id)
    res.status(200).json(successResponse(constants.DEMO_DELETE_SUCCESS))
  } catch (err) {
    res.status(500).json(errorResponse(err.message))
  }
}

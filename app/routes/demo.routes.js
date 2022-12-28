const express = require('express')
const router = express.Router()
const demoController = require('../controllers/demo.controllers')
const { isSignedIn } = require('../middleware/userauth')
const { checkSchema } = require('express-validator')
const { userSchema } = require('../validators/user.validator')
const { validate } = require('../middleware/validate.middleware')

module.exports = (app) => {
  router.post('/', validate(checkSchema(userSchema)), demoController.create)
  router.get('/', demoController.getAll)
  router.get('/:id', demoController.getById)
  router.post('/login', demoController.login)
  router.put('/:id', demoController.update)
  router.delete('/:id', demoController.delete)
  app.use('/api/demo', router)
}
//module.exports = router;

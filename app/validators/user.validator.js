/* user shcema */
exports.userSchema = {
  Name: {
    notEmpty: true,
    errorMessage: 'Name cannot be empty',
  },
  Mobile: {
    notEmpty: true,
    errorMessage: 'Mobile Number cannot be empty',
    isLength: {
      options: { min: 10 },
      errorMessage: 'Mobile number must be 10 digit',
    },
  },
  Email: {
    notEmpty: true,
    errorMessage: 'Email cannot be empty',
    isEmail: {
      bail: true,
      errorMessage: 'Invalid email address',
    },
  },
  password: {
    notEmpty: true,
    errorMessage: 'Password cannot be empty',
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password must be 6 digit',
    },
  },
}

/* email schema */
exports.emailSchema = {
  email: {
    notEmpty: true,
    errorMessage: 'Email cannot be empty',
    isEmail: {
      bail: true,
      errorMessage: 'Invalid email address',
    },
  },
}

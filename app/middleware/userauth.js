var jwt = require("jsonwebtoken");

exports.isSignedIn = async (req, res, next) => {
    const token = req.headers["authorization"];
  
    if (!token) {
      return res.status(403).json({
        Status: "Error",
        statusCode: 403,
        message: "No Token Provided",
      });
    }
    const bearer = token.split(" ");
    const bearerToken = bearer[1];
   
    jwt.verify(bearerToken, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          Status: "Error",
          statusCode: 401,
          message: "Invalid Token",
        });
      }
      req.userId = decoded._id;
  
      next();
    });
  };
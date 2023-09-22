module.exports = function (req, res, next) {
    // Check if the user is logged in by verifying the presence of user session data
    if (req.session.user_id) {
      // User is authenticated, allow access to the route
      next();
    } else {
      // User is not authenticated, send a response indicating unauthorized access
      res.status(401).json({ message: "Unauthorized access. Please log in." });
    }
};
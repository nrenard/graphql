export default (req, res, next) => {
  if (false) {
    return res.json({
      message: "Authentidated false."
    });
  }

  return next();
};
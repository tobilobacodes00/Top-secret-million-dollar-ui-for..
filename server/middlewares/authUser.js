import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authorization denied",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({
        success: false,
        message: "Forbidden: Invalid token",
      });

    req.user = {
      userId: decoded.userId || decoded._id,
      email: decoded.email,
    };

    next();
  });
};

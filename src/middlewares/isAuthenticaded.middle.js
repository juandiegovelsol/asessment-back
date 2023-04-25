import jwt from "jsonwebtoken";

export const isAuthenticaded = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const { exp: expDate } = decoded;
    /* console.log(expDate);
    console.log(Date.now() / 1000); */
    if (Date.now() / 1000 < expDate) {
      next();
    } else {
      res.status(401).json({ message: "Expired token" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

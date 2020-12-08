const { Router } = require("express");
const User = require("../models/").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  const admin = req.user.dataValues.isAdmin;
  try {
    if (admin === false) {
      return res
        .status(403)
        .send({ message: "You are not authorized to see all users" });
    }
    const users = await User.findAll();
    res.status(200).json({
      users,
      message: "Admin Found. You are authorized to see all users",
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
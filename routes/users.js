const express = require("express")
const router = express.Router()
const csrf = require('csurf')
const {User} = require("../models")

router.get("/signup", async (req,res) => {
  res.render("signup")
})

router.post("/signup", async (req,res) => {
  debugger
  const {email, password, username} = req.body

  const hashedPassword = await bcrypt.hash(password,10)
  const user = await User.create({email,hashedPassword,username})

  req.session.user = {id: user.id, email: user.email, username:user.username}

  res.redirect("/")
})

module.exports = router
const express = require("express")
const router = express.Router()

const {Post} = require("../db/models")

router.use("/home", async (req,res) => {
  try {
    const posts = await Post.findAll()
    res.render('index', {title: 'breaddit', posts: posts})
  } catch (e) {
    console.log(e)
  }

  res.render("index.pug", {post})
})

router.use("/authorized_home", async (req,res) => {
  res.render("authorized_home")
})

module.exports = router
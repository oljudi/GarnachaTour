const User = require('../models/User')

exports.homeView = (req, res, next) => {
  res.render('garnacha/home')
}

exports.filterView = (req,res,next) => {
  const prices = ['50-250','260-450','+500']
  const spicyLevels = ['superhot','hot', 'medium', 'nope']
  const colonies = ['Del Valle', 'La Roma', 'SantaFe']
  res.render('garnacha/filter', {
    price: prices,
    spicyLevel: spicyLevels,
    colony: colonies
  })
}
exports.filterPost = async (req,res,next) => {
  const {_id} = req.user
  const {colony, price, spicy} = req.body
  await User.findOneAndUpdate({_id}, {colony, price, spicy})
  res.redirect('/groute')
}

exports.searchPost = async (req,res,next) => {
  res.send(req.body)
}


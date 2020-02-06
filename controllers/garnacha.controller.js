const User = require('../models/User')
const Place = require('../models/Place')
const Dish = require('../models/Dishes')

exports.homeView = (req, res, next) => {
  res.render('garnacha/home', {
    user: req.user
  })
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
  const {search} = req.body
  res.redirect(`/search/${search}`)
}

exports.searchView = async (req,res,next) => {
  const idSearch = req.params.idSearch
  const mayus = idSearch.toUpperCase()
  const data = await Place.find({nomb_asent: mayus})
  // const dishes = await Dish.find({name: idSearch})
  if(data !== null){
    res.render('garnacha/search', {
      user: req.user,
      data: data,
    })
  }
}

exports.dishView = async (req, res, next) => {
  const dishes = await Dish.find({name: 'TacodePastor'})
  res.render('garnacha/dishView', {
    user: req.user,
    data: dishes,
  })
}

exports.tcsView = async (req,res,next) => {
  res.render('partials/checkDishes', {
    user: req.user,
    view: 'Tacos',
    types: ['Taco de Pastor', 'Taco de Suadero', 'Tacos de Guisados']
  })
}
exports.enchView = async (req,res,next) => {
  res.render('partials/checkDishes', {
    user: req.user,
    view: 'Enchiladas',
    types: ['Enchiladas Rojas', 'Enchiladas Verdes', 'Enchiladas de Mole']
  })
}
exports.sopView = async (req,res,next) => {
  res.render('partials/checkDishes', {
    user: req.user,
    view: 'Sopas',
    types: ['Sopa Azteca']
  })
}
exports.burrView = async (req,res,next) => {
  res.render('partials/checkDishes', {
    user: req.user,
    view: 'Burritos',
    types: ['Burrito de Carne']
  })
}
exports.chqView = async (req,res,next) => {
  res.render('partials/checkDishes', {
    user: req.user,
    view: 'Chilaquiles',
    types: ['Chilaquiles Rojos', 'Chilaquiles Verdes']
  })
}
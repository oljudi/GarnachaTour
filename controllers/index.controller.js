exports.homeView = async (res,req,next) => {
  req.redirect('/login')
}
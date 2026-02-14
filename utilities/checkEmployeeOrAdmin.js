 function checkEmployeeOrAdmin(req, res, next) {

     
     if (!res.locals.loggedin) {
    req.flash("notice", "Please log in.")
    return res.redirect("/account/login")
  }

  if (
    res.locals.accountData.account_type === "Employee" ||
    res.locals.accountData.account_type === "Admin"
  ) {
    return next()
  }

  req.flash("notice", "You are not authorized to access this page.")
  return res.redirect("/account/")
}



module.exports = checkEmployeeOrAdmin
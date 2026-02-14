const express = require("express")
const router = new express.Router()
const utilities = require("../utilities/")
const accountController = require("../controllers/accountController")
const regValidate = require("../utilities/account-validation")

router.get("/login", utilities.handleErrors(accountController.buildLogin))
router.get("/register", utilities.handleErrors(accountController.buildRegister))
// Process the registration data
router.post("/register", regValidate.registationRules(), regValidate.checkRegData, utilities.handleErrors(accountController.registerAccount)
)

// Process the login request
router.post( "/login",regValidate.loginRules(), regValidate.checkLoginData, utilities.handleErrors(accountController.accountLogin))

// Account management route
router.get("/", utilities.checkLogin, accountController.buildManagement
)


// Account update routes
router.get("/update/:account_id", utilities.checkLogin, utilities.handleErrors(accountController.buildUpdateView))

router.post(
  "/update", utilities.checkLogin, regValidate.updateAccountRules(), regValidate.checkUpdateAccountData, utilities.handleErrors(accountController.updateAccount))

// Update password
router.post( "/update-password", utilities.checkLogin, regValidate.updatePasswordRules(), regValidate.checkUpdatePasswordData, utilities.handleErrors(accountController.updatePassword))

router.get("/logout", accountController.logout)



module.exports = router
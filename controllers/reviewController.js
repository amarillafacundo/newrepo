const reviewModel = require("../models/review-model")
const utilities = require("../utilities")

async function addReview(req, res) {
  try {
    const { review_text, review_rating, inv_id } = req.body
    const account_id = res.locals.accountData.account_id

    if (!review_text || review_text.trim() === "") {
      req.flash("notice", "Review text cannot be empty.")
      return res.redirect(`/inv/detail/${inv_id}`)
    }

    if (review_rating < 1 || review_rating > 5) {
      req.flash("notice", "Rating must be between 1 and 5.")
      return res.redirect(`/inv/detail/${inv_id}`)
    }

    await reviewModel.addReview(review_text, review_rating, inv_id, account_id)

    req.flash("notice", "Review added successfully!")
    return res.redirect(`/inv/detail/${inv_id}`)
  } catch (error) {
    console.error("Review Controller Error:", error)
    req.flash("notice", "Something went wrong.")
    return res.redirect("/")
  }
}

module.exports = {
  addReview
}

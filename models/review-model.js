const pool = require("../database/")

async function addReview(review_text, review_rating, inv_id, account_id) {
  try {
    const sql = `
      INSERT INTO review (review_text, review_rating, inv_id, account_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `
    const result = await pool.query(sql, [review_text, review_rating, inv_id, account_id])
    return result.rows[0]
  } catch (error) {
    console.error("addReview error:", error)
    return null
  }
}

async function getReviewsByInventoryId(inv_id) {
  try {
    const sql = `
      SELECT r.*, a.account_firstname
      FROM review r
      JOIN account a ON r.account_id = a.account_id
      WHERE inv_id = $1
      ORDER BY review_date DESC;
    `
    const result = await pool.query(sql, [inv_id])
    return result.rows
  } catch (error) {
    console.error("getReviewsByInventoryId error:", error)
    return []
  }
}

module.exports = {
  addReview,
  getReviewsByInventoryId
}

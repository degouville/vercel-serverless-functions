module.exports = ({ body, query, cookies, ...rest }, res) => {
  res.json({ body, query, cookies, ...rest })
}

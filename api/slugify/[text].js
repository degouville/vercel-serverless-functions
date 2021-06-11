import slugify from 'slugify'

const options = { lower: true }

module.exports = ({ query: { text } }, res) => {
  const slug = slugify(text, options)

  res.json({ slug })
}

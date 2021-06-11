import slugify from 'slugify'

const options = { lower: true }
const trimText = (text, from, to) => 
  text
    .split(from).pop()
    .split(to).shift()

module.exports = ({ query: { text: t, ...params } }, res) => {
  const { trimFrom: from, trimTo: to } = params

  const isTrimable = !!from && !!to
  const text = isTrimable ? trimText(t, from, to) : t
  const slug = slugify( text, options )

  res.json({ slug, params })
}

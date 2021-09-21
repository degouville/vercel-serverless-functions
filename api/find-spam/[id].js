const has = b => a => b.includes(a)
const findOccurance = (a, b) => !!a
  .toLowerCase()
  .replace('-', ' ')
  .split(' ')
  .find(has(b))

module.exports = ({ query: { id, mail, name } }, res) => {
  const isSuspect = !findOccurance(name, mail)
  res.json({ id, mail, name, isSuspect })
}

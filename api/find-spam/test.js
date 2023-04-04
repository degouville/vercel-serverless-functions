const { test, exec } = require('vitest')
const { has, nonEmpty, findOccurance } = require('./functions')

test('has', ({ eq }) => {
  eq(has(['apple', 'banana', 'orange'])('orange'), true)
  eq(has(['apple', 'banana', 'orange'])('grapes'), false)
})

test('nonEmpty', ({ eq }) => {
  eq(nonEmpty('hello'), true)
  eq(nonEmpty(''), false)
})

test('findOccurance', ({ eq }) => {
  const str = 'The quick brown fox jumps over the lazy dog'
  eq(findOccurance(str, 'fox'), true)
  eq(findOccurance(str, 'cat'), false)
  eq(findOccurance(str, 'FOX'), true)
  eq(findOccurance('The-quick-brown-fox-jumps-over-the-lazy-dog', 'quick'), true)
})

exec()

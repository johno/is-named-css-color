import test from 'ava'
import isNamedCssColor from './'

test('returns true for named css colors', t => {
  ['tomato', 'hotpink', 'blUe', 'RED', 'rebeccapurple'].forEach(color => {
    t.true(isNamedCssColor(color))
  })

  t.end()
})

test('returns false for unnamed or invalid css colors', t => {
  ['#fff', 'foobar', 'rgb(1,2,3)', 'puke'].forEach(unnamedColor => {
    t.false(isNamedCssColor(unnamedColor))
  })

  t.end()
})

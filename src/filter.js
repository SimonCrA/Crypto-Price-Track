import numeral from 'numeral'

// eslint-disable-next-line padded-blocks
const dollarFilter = function (value) {

  if (!value) {
    return '$ 0'
  }

  return numeral(value).format('($0.00a)')
}
// eslint-disable-next-line padded-blocks
const percentFilter = function (value) {

  if (!value) {
    return '0%'
  }

  return `${Number(value).toFixed(2)}%`
}

export { dollarFilter, percentFilter }

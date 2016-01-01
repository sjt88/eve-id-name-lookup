/* global describe it expect */

var lookup = require('../index.js')

describe('eve-id=name-lookup', function () {
  it('should return the ID of an item queried by name', function () {
    expect(lookup.idByName('Kernite')).toEqual('20')
  })

  it('should return false if the name does not exist', function () {
    expect(lookup.idByName('thisitemdoesntexist')).toEqual(false)
  })

  it('should return the name of an item queried by ID', function () {
    expect(lookup.nameById('20')).toEqual('Kernite')
  })

  it('should return false if the id does not exist', function () {
    expect(lookup.nameById('123123123123123123')).toEqual(false)
  })
})

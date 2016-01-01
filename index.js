var nameById = require(__dirname + 'nameById.json')
var idByName = require(__dirname + 'idByName.json')

module.exports = {
  nameById: function (id) {
    return nameById[id] ? nameById[id] : false
  },
  idByName: function (name) {
    return idByName[name] ? idByName[name] : false
  }
}

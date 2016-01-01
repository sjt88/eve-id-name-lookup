#### idByName

```javascript
var eveLookup = require('eve-id-name-lookup')
var id = lookup.idByName('Kernite')
// id === '20'

var badItemName = lookup.idByName('asdasdasdasd')
// id === false
```

#### nameById

```javascript
var eveLookup = require('eve-id-name-lookup')
var name = lookup.nameById('20')
// name === 'Kernite'

var badItemID = lookup.nameById('20120391732645245')
// name === false
```
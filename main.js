var phrase = []

var string = 'grumpy wizards make toxic brew for the evil queen and jack'

for (var i = 0; i < string.length; i++) {
  let obj = {}
  let char = 'char'
  obj[char] = string[i]
  phrase.push(obj)
}

function grabSingleChar(object) {
  $character = document.createElement('span')
  $character.textContent = object.char
  return $character
}

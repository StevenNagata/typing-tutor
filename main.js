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

function grabAllChar(array) {
  $sentence = document.createElement('div')
  $sentence.classList.add('sentence')
  for (var j = 0; j < array.length; j++) {
    $sentence.appendChild(grabSingleChar(array[j]))
  }
  return $sentence
}

document.body.appendChild(grabAllChar(phrase))

var characterObj = {}

for (var k = 0; k < string.length; k++) {
  let property = string[k]
  characterObj[property] = ''
}

characterObj.currentCharacter= ''
console.log(characterObj)

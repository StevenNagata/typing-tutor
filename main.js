var appState = {
  phrase: [],
  currentCharacter: 0,
}

var string = 'grumpy wizards make toxic brew for the evil queen and jack'

for (var i = 0; i < string.length; i++) {
  let obj = {}
  var char = 'char'
  obj[char] = string[i]
  appState.phrase.push(obj)
}

function grabSingleChar(object, index) {
  $character = document.createElement('a')
  $character.textContent = object[char]
  if (index === appState.currentCharacter) {
    $character.classList.add('currentCharacter')
  }
  return $character
}

function grabAllChar(array) {
  $sentence = document.createElement('div')
  $sentence.classList.add('sentence')
  for (var j = 0; j < array.length; j++) {
    $sentence.appendChild(grabSingleChar(array[j], j))
  }
  return $sentence
}

console.log(appState)
document.body.appendChild(grabAllChar(appState.phrase))

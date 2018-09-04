var appState = {
  phrase: [],
  currentCharacter: 0,
}

var $header = document.createElement('h1')
$header.textContent = 'Typing Tutor'
var string = 'grumpy wizards make toxic brew for the evil queen and jack'

for (var i = 0; i < string.length; i++) {
  let obj = {}
  var char = 'char'
  var failure = 'failure'
  obj[char] = string[i]
  obj[failure] = 0
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

window.addEventListener('keydown', function (e){
  console.log(e.key)
  document.body.textContent = ''
  document.body.appendChild($header)
  document.body.appendChild(grabAllChar(appState.phrase))
})

document.body.appendChild(grabAllChar(appState.phrase))

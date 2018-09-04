var appState = {
  phrase: [],
  currentCharacter: 0,
}

var $header = document.createElement('h1')
$header.textContent = 'Typing Tutor'
var string = 'grumpy wizards make toxic brew for the evil queen and jack'

for (var i = 0; i < string.length; i++) {
  var character = {
    correct: true,
    char: string[i],
    failure: 0,
  }
  appState.phrase.push(character)
}

function grabSingleChar(characterObject, index) {
  let currentCharIndex = appState.phrase[appState.currentCharacter]
  $character = document.createElement('a')
  $character.textContent = characterObject.char
  if (index === appState.currentCharacter) {
    $character.classList.add('currentCharacter')
  }
  if (index === appState.currentCharacter && currentCharIndex.correct === false) {
    $character.classList.add('failure')
  }
  return $character
}

function grabAllChar(sentenceArray) {
  $sentence = document.createElement('div')
  $sentence.classList.add('sentence')
  for (var j = 0; j < sentenceArray.length; j++) {
    $sentence.appendChild(grabSingleChar(sentenceArray[j], j))
  }
  return $sentence
}

window.addEventListener('keydown', function (e) {
  let currentCharIndex = appState.phrase[appState.currentCharacter]
  if (e.key !== currentCharIndex.char) {
    currentCharIndex.failure += 1
    currentCharIndex.correct = false
  }
  else {
    appState.currentCharacter += 1
  }
  document.body.textContent = ''
  document.body.appendChild($header)
  document.body.appendChild(grabAllChar(appState.phrase))
})

document.body.appendChild(grabAllChar(appState.phrase))

let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    'false',
    'false'
  )

  addTopic(
    'noun',
    ' The queen of the gnomes has a deadly ',
    ' which she used to attack interlopers.',
    'false',
    'true'
  )

    addTopic(
    'weapon',
    ' Armed with my trusty ',
    ', I prepared to fight.',
    'false',
    'true'
    )

    addTopic(
    'perfect tense verb',
    ' I ',
    ', ',
    'false',
    'true'
    )

    addTopic(
        'perfect tense verb',
        'and ',
        ', until they were all defeated.',
        'false',
        'true'
     )
    
     addTopic(
         'proper noun',
         ' I owe it all to ',
         '!',
         'false',
         'false'
     )

  // Creates next button and styles it
  let outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)
  .parent(inputDivUI)

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail, uppercase, lowercase) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  let inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

    let userInput = inputFieldUI.value()

  inputFieldUI.changed(updateOutputHandler)

  let output = createP('').parent(outputDivUI)

  if(uppercase === true){
      userInput = inputFieldUI.value().toUpperCase()
  }

  if(lowercase === true){
    userInput = inputFieldUI.value().toLowerCase()
  }
  function updateOutputHandler() {
    output.html(`${intro} ${inputFieldUI.value()} ${detail}`)
  }
}